export function useTelegram() {
  const tg = window.Telegram.WebApp;

  const user = tg.initDataUnsafe?.user;

  if (!user) {
    window.Telegram = {
      WebApp: {
        initData:
          "query_id=AAHq-aQZAAh-7zC4v7y8Jv2D&user=%7B%22id%22%3A123456789%2C%22first_name%22%3A%22Test%22%2C%22last_name%22%3A%22User%22%2C%22username%22%3A%22test_user%22%2C%22language_code%22%3A%22en%22%2C%22is_premium%22%3Atrue%7D&auth_date=1705380203&hash=b0c8a2867dd6e08a50a1e20f2b4f2f5e2e4b4a8c3c6f9e5a3b0c6d2b5a4b7e5c",
        initDataUnsafe: {
          user: {
            id: 123456789,
            first_name: "John",
            last_name: "Doe",
            username: "john_doe",
            language_code: "en",
            is_premium: true,
            added_to_attachment_menu: true,
            allows_write_to_pm: true,
            photo_url:
              "https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fpapik.pro%2Fuploads%2Fposts%2F2021-09%2F1630745197_27-papik-pro-p-telegramm-risunki-anime-29.jpg&lr=11315&pos=3&rpt=simage&text=avatar%20telegram",
          },
        },
        themeParams: {
          bg_color: "#ffffff",
          text_color: "#000000",
        },
        MainButton: {
          text: "Нажми меня",
          show: () => {
            console.log("Main button shown");
          },
        },
        sendData: (data) => {
          console.log(data);
        },
        expand: () => {
          console.log("expand");
        },
        openLink: (url) => {
          console.log("opening link", url);
        },
      },
    };
  }

  return {
    tg,
    user,
  };
}
