import { useCallback, useEffect, useMemo } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getHeroThunk } from "../../redux/thunks/admin/hero/getHero.thunk";

import { updateHeroThunk } from "../../redux/thunks/admin/hero/updateHero.thunk";

import { resetHeroUpdateState } from "../../redux/slices/admin/heroSlice";

import {
  mapHeroFormToPayload,
  mapHeroToFormValues,
} from "../../configs/admin/hero.config";

const useAdminHero = () => {
  const dispatch = useDispatch();

  /* ============================= */
  /* REDUX STATE */
  /* ============================= */

  const { data, loading, updating, error, updateError, updateSuccess } =
    useSelector((state) => state.adminHero);

  /* ============================= */
  /* FETCH HERO ON PAGE LOAD */
  /* ============================= */

  useEffect(() => {
    dispatch(getHeroThunk());
  }, [dispatch]);

  /* ============================= */
  /* FORM VALUES */
  /* ============================= */

  const formValues = useMemo(() => {
    return mapHeroToFormValues(data);
  }, [data]);

  /* ============================= */
  /* UPDATE HERO */
  /* ============================= */

  const updateHero = useCallback(
    async (values) => {
      const payload = mapHeroFormToPayload(values);

      const updatedHero = await dispatch(updateHeroThunk(payload)).unwrap();

      return updatedHero;
    },
    [dispatch],
  );

  /* ============================= */
  /* RELOAD HERO */
  /* ============================= */

  const reloadHero = useCallback(async () => {
    const hero = await dispatch(getHeroThunk()).unwrap();

    return hero;
  }, [dispatch]);

  /* ============================= */
  /* RESET UPDATE STATE */
  /* ============================= */

  const resetUpdateState = useCallback(() => {
    dispatch(resetHeroUpdateState());
  }, [dispatch]);

  return {
    hero: data,

    formValues,

    loading,
    updating,

    error,
    updateError,
    updateSuccess,

    updateHero,
    reloadHero,
    resetUpdateState,
  };
};

export default useAdminHero;
