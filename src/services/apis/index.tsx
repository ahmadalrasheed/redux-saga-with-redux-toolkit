import * as authAPI from './auth';
export const { requestAuth, succeededAuth, failedAuth } = authAPI.authSlice.actions;
export { authAPI };
