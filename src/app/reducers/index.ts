export const INIT_STATE = {
    loading: false,
    errors: false,
    success: false,
    none: true,
};

enum EMAIL_ENUM {
    loading,
    erros,
    success,
    reset,
}

type emailAction = {
    type: EMAIL_ENUM;
};

export const emailReducer = (
    state: typeof INIT_STATE,
    action: emailAction
): typeof INIT_STATE => {
    switch (action.type) {
        case EMAIL_ENUM.loading:
            return { ...INIT_STATE, none: false, loading: true };
        case EMAIL_ENUM.erros:
            return { ...INIT_STATE, none: false, errors: true };
        case EMAIL_ENUM.success:
            return { ...INIT_STATE, none: false, success: true };
        case EMAIL_ENUM.reset:
            return { ...INIT_STATE };
    }
};
