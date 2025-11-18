export const loadAppInstallation = () => {
  try {
    const data = localStorage.getItem("installation");
    return data ? JSON.parse(data) : [];
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const showAppInstallation = (app) => {
  const installation = loadAppInstallation();

  try {
    const appInstallation = [...installation, app];
    localStorage.setItem("installation", JSON.stringify(appInstallation));
  } catch (err) {
    console.log(err);
    return [];
  }
};

export const removeAppInstallation = (id) => {
  const installation = loadAppInstallation();

  try {
    const appInstallation = installation.filter((app) => app.id !== id);
    localStorage.setItem("installation", JSON.stringify(appInstallation));
  } catch (err) {
    console.log(err);
    return [];
  }
};
