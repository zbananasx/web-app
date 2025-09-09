import { useCallback } from 'react';

export function useTelegram() {
    // Важно: получаем tg внутри хука при каждом вызове
    const tg = window.Telegram?.WebApp;
    
    const onClose = useCallback(() => {
        tg?.close();
    }, [tg]);

    const onToggleButton = useCallback(() => {
        if (tg?.MainButton?.isVisible) {
            tg.MainButton.hide();
        } else {
            tg?.MainButton?.show();
        }
    }, [tg]);

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg?.initDataUnsafe?.user,
        // Добавляем флаг для проверки окружения
        isTelegramEnv: !!tg
    };
}