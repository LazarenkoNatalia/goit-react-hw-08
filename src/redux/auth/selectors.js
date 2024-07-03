export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectAuth = state => state.auth;

export const selectRefresh = state => state.auth.isRefreshing