const mutations = {
    SET_USER(state, payload) {
        state.user = payload
    },
    SET_USER_ROLE(state, payload) {
        state.user_role = payload
    },
    LOGOUT(state) {
        localStorage.removeItem('lkUser')
        state.user = null
        state.isAuth = false
        state.categories = null
    },
    IS_AUTH(state, payload) {
        var user_role;

        // Set user role to a defined role
        if(payload.user_role == 3) {
          user_role = 'Admin'
        }else if(payload.user_role == 2) {
          user_role = 'Tutor'
        }else{
          user_role = 'User'
        }

        localStorage.setItem('token', payload.token)
        localStorage.setItem('expiration', payload.expiration)
        localStorage.setItem('user_role', user_role)

        state.isAuth = true
    },
    GET_CATEGORIES(state, payload) {
        state.categories = payload
    },

    GET_CATEGORY(state, payload) {
        state.category = payload
    },

    GET_COURSES(state, courses) {
        state.courses = courses
    },
    GET_COURSE(state, course) {
        state.course = course
    },
    AUTH_ERROR(state, payload) {
        state.error = payload
    },
    CLEAR_ERROR(state, payload) {
        state.error = null
    }
}

export default mutations
