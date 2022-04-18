import { useEffect, useReducer, useState } from "react";
import { removeBigWhiteSpace } from "../helper/reusableFunctions";
import styles from "../styles/components/Form/Form.module.css";
import Button from "./UI/Button";
import { v4 as uuid } from "uuid";

const Form = function (props) {
    const [isFormValid, setIsFormValid] = useState(false);


    const [usernameState, dispatchUsername] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return { value: action.val, isValid: state.isValid };
            }
            if (action.type === "USER_BLUR") {
                return { value: state.value, isValid: state.value.length > 5 };
            }
            if (action.type === "CLEAR_FIELDS") {
                return { value: "", isValid: null };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const usernameChangeHandler = function (e) {
        dispatchUsername({ type: "USER_INPUT", val: e.target.value });
    };

    const usernameBlurHandler = function () {
        dispatchUsername({ type: "USER_BLUR" });
    };

    //name
    const [fnameState, dispatchFnameState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return { value: action.val, isValid: state.isValid };
            }
            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.trim().length > 5,
                };
            }
            if (action.type === "CLEAR_FIELDS") {
                return { value: "", isValid: null };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const fnameChangeChangeHandler = function (e) {
        dispatchFnameState({ type: "USER_INPUT", val: e.target.value });
    };

    const fnameBlurHandler = function () {
        dispatchFnameState({ type: "USER_BLUR" });
    };

    //zipcode
    const [zipcodeState, dispatchZipcodeState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return { value: action.val, isValid: state.isValid };
            }
            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.trim().length > 6,
                };
            }
            if (action.type === "CLEAR_FIELDS") {
                return { value: "", isValid: null };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const zipcodeChangeChangeHandler = function (e) {
        dispatchZipcodeState({ type: "USER_INPUT", val: e.target.value });
    };

    const zipcodeBlurHandler = function () {
        dispatchZipcodeState({ type: "USER_BLUR" });
    };

    //Street
    const [streetState, dispatchStreetState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return { value: action.val, isValid: state.isValid };
            }
            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.trim().length > 5,
                };
            }
            if ((action.type = "CLEAR_FIELDS")) {
                return { value: "", isValid: null };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const streetChangeChangeHandler = function (e) {
        dispatchStreetState({ type: "USER_INPUT", val: e.target.value });
    };

    const streetBlurHandler = function () {
        dispatchStreetState({ type: "USER_BLUR" });
    };

    //cityState
    const [cityState, dispatchCityState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return { value: action.val, isValid: state.isValid };
            }
            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.trim().length > 5,
                };
            }
            if ((action.type = "CLEAR_FIELDS")) {
                return { value: "", isValid: null };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const cityChangeChangeHandler = function (e) {
        dispatchCityState({ type: "USER_INPUT", val: e.target.value });
    };

    const cityBlurHandler = function () {
        dispatchCityState({ type: "USER_BLUR" });
    };

    //email
    const [emailState, dispatchEmailState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return { value: action.val, isValid: state.isValid };
            }
            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.trim().length > 5,
                };
            }
            if (action.type === "CLEAR_FIELDS") {
                return { value: "", isValid: null };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const emailChangeChangeHandler = function (e) {
        dispatchEmailState({ type: "USER_INPUT", val: e.target.value });
    };

    const emailBlurHandler = function () {
        dispatchEmailState({ type: "USER_BLUR" });
    };

    //phone
    const [phoneState, dispatchPhoneState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return { value: action.val, isValid: state.isValid };
            }
            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.trim().length > 10,
                };
            }
            if (action.type === "CLEAR_FIELDS") {
                return { value: "", isValid: null };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const phoneChangeChangeHandler = function (e) {
        dispatchPhoneState({ type: "USER_INPUT", val: e.target.value });
    };

    const phoneBlurHandler = function () {
        dispatchPhoneState({ type: "USER_BLUR" });
    };

    //website
    const [siteState, dispatchSiteState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return { value: action.val, isValid: state.isValid };
            }
            if (action.type === "USER_BLUR") {
                return {
                    value: state.value,
                    isValid: state.value.trim().length > 5,
                };
            }
            if ((action.type = "CLEAR_FIELDS")) {
                return { value: "", isValid: null };
            }

            return { value: "", isValid: false };
        },
        { value: "", isValid: null }
    );

    const siteChangeChangeHandler = function (e) {
        dispatchSiteState({ type: "USER_INPUT", val: e.target.value });
    };

    const siteBlurHandler = function () {
        dispatchSiteState({ type: "USER_BLUR" });
    };

    //text area
    const [textAreaState, dispatchTextAreaState] = useReducer(
        (state, action) => {
            if (action.type === "USER_INPUT") {
                return action.val;
            }
            if (action.type === "CLEAR_FIELDS") {
                return "";
            }

            return "";
        },
        ""
    );

    const textAreaChangeHandler = function (e) {
        dispatchTextAreaState({ type: "USER_INPUT", val: e.target.value });
    };


    const addUser = function (e) {
        e.preventDefault();
        if (isFormValid !== true) return;

        const uName = removeBigWhiteSpace(usernameState.value);
        const uCity = removeBigWhiteSpace(cityState.value);
        const uStreet = removeBigWhiteSpace(streetState.value);
        const uFname = removeBigWhiteSpace(fnameState.value);
        const uEmail = removeBigWhiteSpace(emailState.value);
        const uZipcode = removeBigWhiteSpace(zipcodeState.value);
        const uPhone = removeBigWhiteSpace(phoneState.value);
        const uSite = removeBigWhiteSpace(siteState.value);
        let randomID = uuid();

        fetch("http://localhost:3004/users", {
            method: "POST",
            body: JSON.stringify({
                username: uName,
                overview: textAreaState.trim(),
                city: uCity,
                street: uStreet,
                fname: uFname,
                email: uEmail,
                zipcode: uZipcode,
                phone: uPhone,
                site: uSite,
                id: randomID,
            }),
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
        });
        props.onAddingNewUser(
            uName,
            uCity,
            uStreet,
            uFname,
            uEmail,
            randomID,
            uZipcode,
            uPhone,
            uSite,
            textAreaState.trim()
        );

        dispatchUsername({ type: "CLEAR_FIELDS" });
        dispatchCityState({ type: "CLEAR_FIELDS" });
        dispatchStreetState({ type: "CLEAR_FIELDS" });
        dispatchEmailState({ type: "CLEAR_FIELDS" });
        dispatchZipcodeState({ type: "CLEAR_FIELDS" });
        dispatchFnameState({ type: "CLEAR_FIELDS" });
        dispatchPhoneState({ type: "CLEAR_FIELDS" });
        dispatchTextAreaState({ type: "CLEAR_FIELDS" });
        dispatchSiteState({ type: "CLEAR_FIELDS" });
    };

    const { isValid: usernameValid } = usernameState;
    const { isValid: cityValid } = cityState;
    const { isValid: streetValid } = streetState;
    const { isValid: fnameValid } = fnameState;
    const { isValid: emailValid } = emailState;
    const { isValid: zipcodeValid } = zipcodeState;
    const { isValid: phoneValid } = phoneState;
    const { isValid: siteValid } = siteState;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFormValid(
                usernameValid &&
                    cityValid &&
                    streetValid &&
                    zipcodeValid &&
                    fnameValid &&
                    phoneValid &&
                    siteValid &&
                    emailValid !== false
            );
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [usernameValid, cityValid, streetValid, fnameValid, emailValid, zipcodeValid, phoneValid, siteValid]);

    return (
        <form id="form" method="post" className={styles["main-form"]}>
            <h2>Create Account</h2>
            <div
                className={`${styles["main-form__control"]} ${
                    (usernameState.isValid === false &&
                        styles["main-form__control--invalid"]) ||
                    (usernameState.isValid === true &&
                        styles["main-form__control--valid"])
                }`}
            >
                <label htmlFor="name"> Username</label>
                <input
                    type="text"
                    id="name"
                    placeholder={"Ivan228"}
                    onChange={usernameChangeHandler}
                    onBlur={usernameBlurHandler}
                    value={usernameState.value}
                />
            </div>
            <div
                className={`${styles["main-form__control"]} ${
                    (fnameState.isValid === false &&
                        styles["main-form__control--invalid"]) ||
                    (fnameState.isValid === true &&
                        styles["main-form__control--valid"])
                }`}
            >
                <label htmlFor="password2"> First Name</label>
                <input
                    type="text"
                    id="password2"
                    placeholder={"Ivan Ivanov"}
                    onChange={fnameChangeChangeHandler}
                    onBlur={fnameBlurHandler}
                    value={fnameState.value}
                />
            </div>
            <div
                className={`${styles["main-form__control"]} ${
                    (emailState.isValid === false &&
                        styles["main-form__control--invalid"]) ||
                    (emailState.isValid === true &&
                        styles["main-form__control--valid"])
                }`}
            >
                <label htmlFor="password2"> E-mail</label>
                <input
                    type="text"
                    id="password2"
                    placeholder={"ivan.ivanov@mail.ru"}
                    onChange={emailChangeChangeHandler}
                    onBlur={emailBlurHandler}
                    value={emailState.value}
                />
            </div>
            <div
                className={`${styles["main-form__control"]} ${
                    (streetState.isValid === false &&
                        styles["main-form__control--invalid"]) ||
                    (streetState.isValid === true &&
                        styles["main-form__control--valid"])
                }`}
            >
                <label htmlFor="street"> Street </label>
                <input
                    type="text"
                    id="street"
                    placeholder={"St.Pushkina"}
                    onChange={streetChangeChangeHandler}
                    onBlur={streetBlurHandler}
                    value={streetState.value}
                />
            </div>
            <div
                className={`${styles["main-form__control"]} ${
                    (cityState.isValid === false &&
                        styles["main-form__control--invalid"]) ||
                    (cityState.isValid === true &&
                        styles["main-form__control--valid"])
                }`}
            >
                <label htmlFor="city"> City </label>
                <input
                    type="text"
                    id="city"
                    placeholder={"Moscow"}
                    onChange={cityChangeChangeHandler}
                    onBlur={cityBlurHandler}
                    value={cityState.value}
                />
            </div>
            <div
                className={`${styles["main-form__control"]} ${
                    (zipcodeState.isValid === false &&
                        styles["main-form__control--invalid"]) ||
                    (zipcodeState.isValid === true &&
                        styles["main-form__control--valid"])
                }`}
            >
                <label htmlFor="zipcode"> Zipcode </label>
                <input
                    type="tel"
                    id="zipcode"
                    placeholder={"010001"}
                    onChange={zipcodeChangeChangeHandler}
                    onBlur={zipcodeBlurHandler}
                    value={zipcodeState.value}
                />
            </div>
            <div
                className={`${styles["main-form__control"]} ${
                    (phoneState.isValid === false &&
                        styles["main-form__control--invalid"]) ||
                    (phoneState.isValid === true &&
                        styles["main-form__control--valid"])
                }`}
            >
                <label htmlFor="phone"> Phone </label>
                <input
                    type="tel"
                    id="phone"
                    placeholder={"8(777) 567 89 24"}
                    onChange={phoneChangeChangeHandler}
                    onBlur={phoneBlurHandler}
                    value={phoneState.value}
                />
            </div>
            <div
                className={`${styles["main-form__control"]} ${
                    (siteState.isValid === false &&
                        styles["main-form__control--invalid"]) ||
                    (siteState.isValid === true &&
                        styles["main-form__control--valid"])
                }`}
            >
                <label htmlFor="site"> Website </label>
                <input
                    type="text"
                    id="site"
                    placeholder={"www.example.com"}
                    onChange={siteChangeChangeHandler}
                    onBlur={siteBlurHandler}
                    value={siteState.value}
                />
            </div>
            <div className={styles["main-form__control"]}>
                <label>Comments</label>
                <textarea
                    value={textAreaState}
                    row="6"
                    onChange={textAreaChangeHandler}
                ></textarea>
            </div>
            {/*{props.isEdit*/}
            {/*?<Button*/}
            {/*        onClick={editUser}*/}
            {/*        className={`${styles['main-form__btn-submit']} ${*/}
            {/*            isFormValid ? styles['main-form__btn-submit--enabled'] : styles['main-form__btn-submit--disabled']*/}
            {/*        }`}*/}
            {/*    >*/}
            {/*        Save*/}
            {/*    </Button>*/}
            {/*:<Button*/}
            {/*        onClick={addUser}*/}
            {/*        className={`${styles['main-form__btn-submit']} ${*/}
            {/*            isFormValid ? styles['main-form__btn-submit--enabled'] : styles['main-form__btn-submit--disabled']*/}
            {/*        }`}*/}
            {/*    >*/}
            {/*        Submit*/}
            {/*    </Button>}*/}
            <Button
                onClick={addUser}
                className={`${styles['main-form__btn-submit']} ${
                    isFormValid ? styles['main-form__btn-submit--enabled'] : styles['main-form__btn-submit--disabled']
                }`}
            >
                Submit
            </Button>
        </form>
    );
};

export default Form;
