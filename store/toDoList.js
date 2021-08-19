export const state = () => {
    return {
        listDone: []
    }
}

export const mutations = {
    add(state, listDone) {
        console.log("mutation add")
        state.listDone.unshift(listDone)
    },
    remove(state, listDone) {
        state.listDone.splice(listDone, 1)

    }
}

export const actions = {
    add({ commit }, listDone) {
        console.log('action add')
        commit("add", listDone)
    },
    remove({ commit }, listDone) {
        commit("remove", listDone)
    }
}