//import { GithubRepoFormState } from 'app/pages/HomePage/Features/GithubRepoForm/slice/types';
import { ThemeState } from 'styles/theme/slice/types'
import { SignupPageState } from 'app/pages/SignupPage/slice/types'
import { LoginPageState } from 'app/pages/LoginPage/slice/types'
import { FeedPageState } from 'app/pages/FeedPage/slice/types'
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  theme?: ThemeState
  signuppage?: SignupPageState
  loginpage?: LoginPageState
  feedpage?: FeedPageState
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
