const tg = window.Telegram.WebApp;
export function useTelegram() {

    const onClose = () => {
  tg.close()
    }
    const onToggleButton = () => {
        if(tg.mainButton.isVisible){
            tg.mainButton.hide();
        } else {
            tg.mainButton.show();
        }
    }
    return{
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}