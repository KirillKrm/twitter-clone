import { WinstonModule } from 'nest-winston'
import winston from 'winston'
import colors from 'colors/safe'
import { inspect } from 'util'

const format = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:MM:SS',
  }),
  winston.format.errors({ stack: true }),
  winston.format(info => {
    info.level = info.level.toUpperCase()
    info.timestamp = colors.blue(info.timestamp)
    info.context = colors.yellow(info.context)

    return info
  })(),
  winston.format.colorize(),
  winston.format.printf(info => {
    const { level, message, timestamp, context, ...stringifiedRest } = info
    const padding = (info.padding && info.padding[info.level]) || ''

    const restStr =
      Object.keys(stringifiedRest).length === 0
        ? ''
        : ' ' + JSON.stringify(stringifiedRest)

    return (
      `[${timestamp}] ${level} <${context}>:${padding} ${message}` + restStr
    )
  }),
)

const simpleFormat = winston.format.combine(
  winston.format.timestamp({
    format: 'YYYY-MM-DD HH:MM:SS',
  }),
)

const winstonTransports = [
  new winston.transports.Console({
    format,
    level: process.env.NODE_ENV === 'development' ? 'debug' : 'info',
  }),
  new winston.transports.File({
    filename: `info-${new Date().toISOString()}.log`,
    dirname: 'logs',
    handleExceptions: true,
    level: 'info',
    format: simpleFormat,
  }),
  new winston.transports.File({
    filename: `error-${new Date().toISOString()}.log`,
    dirname: 'logs',
    handleExceptions: true,
    level: 'error',
    format: simpleFormat,
  }),
]

if (process.env.NODE_ENV !== 'production') {
  winstonTransports.push(
    new winston.transports.Console({
      level: 'error',
      handleExceptions: true,
      format: winston.format.printf(info => {
        const { level, message, timestamp, stack } = info

        if (info instanceof Error) {
          const formattedStack = stack || inspect(info, { depth: null })
          return `${timestamp} ${level}: ${formattedStack}`
        }

        return `${timestamp} ${level}: ${message}`
      }),
    }),
  )
}

export const logger = WinstonModule.createLogger({
  transports: winstonTransports,
})
