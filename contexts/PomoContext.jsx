import { createContext, useContext, useReducer } from "react";

const PomoContext = createContext();

const Default = {
  start: new Date(),
  state: "stopped", // "stopped" | "started"
  duration: 0, // 5, 15, 25
}

function reducer(state, action) {
  switch (action.type) {
    case "START": {
      return ({
        start: new Date(),
        state: "started",
        duration: action.payload.duration
      })
    }
    case "STOP": {
      return ({
        ...state,
        state: "stopped"
      })
    }
    default:
      return state;
  }
}

const PomoProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, Default)

  return (
    <PomoContext.Provider value={[state, dispatch]}>
      {children}
    </PomoContext.Provider>
  )
}

const usePomoContext = () => {
  return useContext(PomoContext);
}

export default PomoProvider;
export {usePomoContext};