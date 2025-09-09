export function useTelegram() {
    // Функция для безопасного получения tg
    const getTelegram = () => {
        return window.Telegram?.WebApp;
    }

    const onClose = () => {
        getTelegram()?.close();
    }

    const onToggleButton = () => {
        const tg = getTelegram();
        if(tg?.MainButton?.isVisible){
            tg.MainButton.hide();
        } else {
            tg?.MainButton?.show();
        }
    }

    const tg = getTelegram();

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg?.initDataUnsafe?.user,
    }
}