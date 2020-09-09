const VIEWPORT_PC = 'common/VIEWPORT_PC' as const;
const VIEWPORT_MOBILE = 'common/VIEWPORT_MOBILE' as const;

export const viewPortPc = () => ({
  type: VIEWPORT_PC,
  payload: 'pc',
});

export const viewPortMobile = () => ({
  type: VIEWPORT_MOBILE,
  payload: 'mobile',
});

type CommonState = {
  viewPort: 'pc' | 'mobile' | null;
};

const initialState = {
  viewPort: null,
};

const reducer = (state: CommonState = initialState, action: any) => {
  switch (action.type) {
    case VIEWPORT_PC:
      return {
        ...state,
        viewPort: 'pc',
      };
    case VIEWPORT_MOBILE:
      return {
        ...state,
        viewPort: 'mobile',
      };
    default:
      return state;
  }
};

export default reducer;
