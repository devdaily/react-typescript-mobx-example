import { createBrowserHistory } from 'history'
const history = createBrowserHistory()
export default history
export const push = history.push
export const replace = history.replace