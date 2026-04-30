import { createContext, useState, useEffect } from "react";
import { userIdMapper } from "./utils/userIdMapper";
import { parseCSV } from "./utils/csvParser";
import { dataNormalizer } from "./utils/dataNormalizer.js";
import {normalizeRowsWithRepeatedHeaders} from "./utils/normalizeRowsWithRepeatedHeaders.js"

export const UserContext = createContext(null);
export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [issues,setIssues] = useState([]); 
  // const [issues,setIssues] = useState(null); 


  useEffect(() => {
    const userFetch = fetch("/Jira-User-Data.csv")
      .then((res) => {
        return res.text();
      })
      .then((text) => {
        return new Promise((resolve)=>{
          parseCSV(text, (rows) => {
            const mapped = userIdMapper(rows);
            setUserData(mapped);
            resolve();
          });
        })
      })
    const issueFetch = fetch("/Jira-Dump.csv")
      .then(res => res.text())
      .then(text => {
        return new Promise((resolve)=>{
          parseCSV(text, (rows) => {
            setIssues(dataNormalizer(normalizeRowsWithRepeatedHeaders(rows)))
            resolve();
          })
        })
      })

      Promise.all([userFetch,issueFetch])
      .catch((err)=>{
        setError("Error in loading data: "+err)
      })
      .finally(()=>{
        setLoading(false)
      })
  }, []);

  return (
    <UserContext.Provider
      value={{
        userData,
        loading,
        error,
        issues
      }}
    >
      {children}
    </UserContext.Provider>
  );
};