export const useUserOS = () => {
  let userOS: string = "unknown";
  let isServer: boolean = typeof window === "undefined";
  const osObj: { [key: string]: string } = {
    win: "Windows",
    mac: "macOS",
    linux: "Linux",
    android: "Android",
    "iphone|ipad|ipod|mac|safari": "iOS",
  };

  if (!isServer) {
    const Navigator = window.navigator;
    // console.log(
    //   Navigator.userAgent,
    //   Object.keys(osObj).find((item) =>
    //     new RegExp(osObj[item], "gi").test(Navigator.userAgent)
    //   ) || undefined
    // );
    let keyOS: string | undefined =
      Object.keys(osObj).find((item) =>
        new RegExp(osObj[item].toLowerCase(), "gi").test(Navigator.userAgent)
      ) || undefined;
    typeof keyOS !== "undefined" ? (userOS = osObj[keyOS]) : "unknown";
  }

  return { userOS };
};
