export function useTelegram() {
  const tg = window.Telegram.WebApp;

  const user = tg.initData?.user;

  // if (!user) {
  //   window.Telegram = {
  //     WebApp: {
  //       initDataUnsafe: {
  //         user: {
  //           id: 123456789,
  //           first_name: "John",
  //           last_name: "Doe",
  //           username: "john_doe",
  //           language_code: "en",
  //           is_premium: true,
  //           added_to_attachment_menu: true,
  //           allows_write_to_pm: true,
  //           photo_url:
  //             "https://yandex.ru/images/search?from=tabbar&img_url=https%3A%2F%2Fpapik.pro%2Fuploads%2Fposts%2F2021-09%2F1630745197_27-papik-pro-p-telegramm-risunki-anime-29.jpg&lr=11315&pos=3&rpt=simage&text=avatar%20telegram",
  //         },
  //       },
  //       themeParams: {
  //         bg_color: "#ffffff",
  //         text_color: "#000000",
  //       },
  //       MainButton: {
  //         text: "Нажми меня",
  //         show: () => {
  //           console.log("Main button shown");
  //         },
  //       },
  //       sendData: (data) => {
  //         console.log(data);
  //       },
  //       expand: () => {
  //         console.log("expand");
  //       },
  //       openLink: (url) => {
  //         console.log("opening link", url);
  //       },
  //     },
  //   };
  // }

  return {
    tg,
    user,
  };
}
