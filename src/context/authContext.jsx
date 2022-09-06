import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
  updateCurrentUser,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider
} from "firebase/auth";
import { auth } from "../firebase";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  
  const signUp = async (email, password, username) => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    // const authorization = getAuth()
    // updateCurrentUser(authorization.currentUser, {
    //   displayName: username
    // }).then(() => {
    //   console.log(userCredential.user)
    // }).catch((error) => {
    //   console.log(error);
    // })
  };

  const login = async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  };

  const logout = () => signOut(auth)

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const loginWithGitHub = () => {
    const githubProvider = new GithubAuthProvider()
    return signInWithPopup(auth, githubProvider)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    })

    return () => unsubscribe()
  }, [])

  return (
    <authContext.Provider value={{ signUp, login, user, logout, loginWithGoogle, loginWithGitHub }}>
      {children}
    </authContext.Provider>
  );
}
