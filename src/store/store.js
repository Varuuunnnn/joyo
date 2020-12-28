import {firebaseAuth, firebaseDb} from 'boot/firebase'


const state={
 userDetails: {},
}

const mutations={
  setUserDetails(state, payload){
      state.userDetails=payload
  }
 }

const actions={
  registerUser({},payload){
    //   console.log('payload: ',payload)
      firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
      .then(response=>{
          //console.log(response)
          let userId= firebaseAuth.currentUser.uid
          firebaseDb.ref('users/' + userId).set({
           name: payload.name,
           email: payload.email,
           type: payload.type

        })
      
      })
      .catch(error=>{
          console.log(error.message)
      })
  },
  
  loginUser({},payload){
    firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then(response=>{
        console.log(response)
    })
    .catch(error=>{
        console.log(error.message)
    })
  },
  
  logoutUser(){
      firebaseAuth.signOut()
  },
  
  handleAuthStateChanged({ commit }){
    firebaseAuth.onAuthStateChanged(user=> {
        if (user) {
          // User is signed in.
          let userId = firebaseAuth.currentUser.uid
          firebaseDb.ref('users/' + userId).once('value',snapshot=>{
              //console.log('snapshot :',snapshot)
              let userDetails = snapshot.val()
              //console.log('userDetails: ',userDetails)
              commit('setUserDetails',{
                  name : userDetails.name,
                  type: userDetails.type,
                  email : userDetails.email,
                  userId: userId
              })
          })
          this.$router.push('/dashboard')
        }
        else{
            //users is logged out so we need to reset user details with empty object
            commit('setUserDetails',{})
            this.$router.replace('/')
        }
      });
  }
 }

 const getters={
  
 }

 export default{
     namespaced:true, 
     state,
     mutations,
     actions,
     getters
 }