import { fetching_all_profiles, fetching_all_profiles2, personalpro } from "./Actions";

export const mapStatetoprops = (state) => {
  return {
    ...state,
  };
};
export const mapDispatchtoprops = (dispatch) => {
  return {
    fetching_all_data: (e) => dispatch(fetching_all_profiles(e)),
    fetching_all_data2: (e) => dispatch(fetching_all_profiles2(e)),
    fetching_personal_data: (e) => dispatch(personalpro(e))

  };
};