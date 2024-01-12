import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getAuth, deleteUser } from "firebase/auth";

const Profile = () => {
  const { user, updateInfo } = useContext(AuthContext);
  // console.log(user);

  // Change Image Part
  const [showImageInput, setShowImageInput] = useState(false);
  const [newImageURL, setNewImageURL] = useState("");

  const handleShowImageInput = () => {
    setShowImageInput(true);
  };

  const handleImageChange = (e) => {
    setNewImageURL(e.target.value);
  };

  const handleImageSubmit = () => {
    updateInfo(user?.displayName, newImageURL, user?.phoneNumber).then(() => {
      fetch(`https://summer-camp-server-pied-alpha.vercel.app/users/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ photo: newImageURL }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      setShowImageInput(false);
      setNewImageURL("");
    });
  };

  // Name Change Part
  const [showNameInput, setShowNameInput] = useState(false);
  const [newName, setNewName] = useState("");

  const handleShowNameInput = () => {
    setShowNameInput(true);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNameSubmit = () => {
    updateInfo(newName, user?.photoURL, user?.phoneNumber).then(() => {
      fetch(`https://summer-camp-server-pied-alpha.vercel.app/users/${user?.email}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ name: newName }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      setShowImageInput(false);
      setNewImageURL("");
      setShowNameInput(false);
      setNewName("");
    });
  };

  // Delete Account Part

  const deleteAccount = () => {
    const auth = getAuth();
    const deleteAcc = auth.currentUser;

    if (deleteAcc) {
      // alert("Account can't be deleted")
      deleteUser(user)
        .then(() => {
          fetch(`https://summer-camp-server-pied-alpha.vercel.app/users/${user?.email}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 text-center py-6">
      <div className="flex justify-center">
        <div className="flex justify-center">
          {showImageInput ? (
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo</span>
              </label>
              <input
                type="text"
                className="p-2 rounded-md"
                placeholder="new image"
                value={newImageURL}
                onChange={handleImageChange}
              />
              <button
                className="p-2 rounded-md mt-2 btn btn-primary"
                onClick={handleImageSubmit}
              >
                Update Image
              </button>
            </div>
          ) : (
            <button onClick={handleShowImageInput}>
              <img
                className="lg:w-36 w-20 lg:h-36 h-20 rounded-full"
                src={user?.photoURL}
                alt=""
              />
            </button>
          )}
        </div>
      </div>

      {/* Change Name Part */}
      {showNameInput ? (
        <div className="form-control">
          <div className=" flex justify-center mt-6">
            <input
              type="text"
              className="p-2 rounded-md w-48"
              placeholder="new name"
              value={newName}
              onChange={handleNameChange}
            />
          </div>
          <div className=" flex justify-center">
            <button
              className="btn btn-primary p-2 rounded-md mt-2 w-48"
              onClick={handleNameSubmit}
            >
              Update Name
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="lg:text-4xl text-2xl font-semibold mt-6">
            {user?.displayName}
          </div>
          <p>
            Email: <span className="lg:text-3xl">{user?.email}</span>
          </p>
          <button
            onClick={() => handleShowNameInput()}
            className="btn btn-primary p-2 rounded-md mt-2"
          >
            Change Name{" "}
          </button>
        </div>
      )}

      {/* Delete Account Part */}
      <div className="divider">OR</div>
      <div>
        <button
          onClick={() => deleteAccount()}
          className="btn btn-primary p-2 rounded-md mt-2"
        >
          Delete Account{" "}
        </button>
      </div>
    </div>
  );
};

export default Profile;
