import React from "react";
import Form from "./components/Form";
import Header from "./components/Header/Header";
import UserList from "./components/UserList";
import ListWrapper from "./components/UI/ListWrapper";
import { useState, useEffect } from "react";
import InformationModal from "./components/InformationModal";
import NavContext from "./context/navcontext";
import useHttp from "./hooks/useHttp";
import Button from "./components/UI/Button";

function App() {
    const [userListState, setUserListState] = useState([]);
    const [displayModal, setDisplayModal] = useState(false);
    const [isEdit, setisEdit] = useState(false);
    const [modalCurrentUser, setModalCurrentUser] = useState({});
    const [menu, menuState] = useState("users");

    const { sendRequest } = useHttp();

    useEffect(() => {
        const receiveUsers = (users) => {
            const usersList = [];
            users.forEach((user) => {
                usersList.unshift(user);
            });

            setUserListState(usersList);
        };


        sendRequest({ url: "http://localhost:3004/users" }, receiveUsers);
    }, [sendRequest]);

    const addingNewUser = function (
        uName,
        uCity,
        uStreet,
        uFname,
        uEmail,
        randomID,
        uZipcode,
        uPhone,
        uSite,
        textArea,
    ) {
        setUserListState((prev) => {
            const previous = [...prev];
            previous.unshift({
                username: uName,
                overview: textArea.trim(),
                city: uCity,
                street: uStreet,
                fname: uFname,
                email: uEmail,
                zipcode: uZipcode,
                phone: uPhone,
                site: uSite,
                id: randomID,
            });
            return previous;
        });
    };

    const sortBy = function (
        sortBy
    ) {
        setUserListState((prev) => {
            const previous = [...prev];
            previous.sort((a, b) => a[sortBy].localeCompare(b[sortBy]))
            return previous;
        });
    };

    const removeAccount = function (e) {
        setUserListState((prev) => {
            const previous = [...prev];
            const filtered = previous.filter(
                (acc) => acc.id.toString() !== e.target.id
            );
            return filtered;
        });

        sendRequest({
            url: `http://localhost:3004/users/${e.target.id}`,
            method: "DELETE",
        });
    };

    const menuOption = function (e) {
        menuState(e.target.id);
    };

    const displayInfoModal = function (e) {
        setDisplayModal(true);
    };

    const closeModal = function () {
        setDisplayModal(false);
    };

    const [userFilter, setUserState] = useState("");

    const filter = function (e) {
        setUserState(e.target.value);
    };

    const editUser = function (e) {
        console.log(userListState)
        const filtered = userListState.forEach(u => {
            if (u.id.toString()===e.target.id){
                u.fname = "test"
            }
        })
        console.log(filtered)
        // setUserListState((prev) => {
        //     const previous = [...prev];
        //     console.log(previous)
        //     const filtered = previous.map(u => {

        //         if (u.id.toString()===e.target.id){
        //             u.fname = "test"
        //         }
        //     })
        //     console.log(filtered)
        //     // return filtered;
        // });

        sendRequest({
            url: `http://localhost:3004/users/${e.target.id}`,
            method: "PUT",
        });
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(`http://localhost:3004/users?username=${userFilter}`)
                .then((response) => response.json())
                .then((users) => {
                    if (users.length > 0) {
                        setUserListState(users);
                    } else {
                        let account = [];
                        fetch(`http://localhost:3004/users`)
                            .then((response) => response.json())
                            .then((users) => {
                                users.forEach((user) => {
                                    account.unshift(user);
                                });
                                setUserListState(() => {
                                    return account;
                                });
                            });
                    }
                });
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [userFilter]);

    return (
        <React.Fragment>
            <NavContext.Provider
                value={{ onMenuOption: menuOption, onFilter: filter }}
            >
                <Header
                sortBy = {sortBy}
                />
                <div className="wrapper">
                    <Form onAddingNewUser={addingNewUser}  />
                <ListWrapper>
                        {menu === "users" && (
                            <UserList
                                list={userListState}
                                onRemoveAccount={removeAccount}
                                onEditUser = {editUser} isEdit = {isEdit}
                            />
                        )}
                    </ListWrapper>
                </div>
            </NavContext.Provider>
            {displayModal && (
                <InformationModal
                    onCloseModal={closeModal}
                    currentUserModal={modalCurrentUser}
                />
            )}
        </React.Fragment>
    );
}



export default App;
