  //////////////////////////////////////////////////////////////////////////
  // RUN ONCE //////////////////////////////////////////////////////////////
  const useMountEffect = (callback) => useEffect(callback, [])
  let jobDone = false
  const runOnce = () => {
    // run only ONCE !
    if (!jobDone) {
      jobDone = true
      // your job now ! ...
      // ...
      
    }
  }
  useMountEffect(runOnce)
  // END ONCE ! ////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////
