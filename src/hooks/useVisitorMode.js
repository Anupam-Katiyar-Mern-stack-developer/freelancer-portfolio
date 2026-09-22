const useVisitorMode = () => {
  const params = new URLSearchParams(window.location.search);

  const visitorType = params.get("for");

  const isClient = visitorType === "client";

  return {
    visitorType,
    isClient,
  };
};

export default useVisitorMode;