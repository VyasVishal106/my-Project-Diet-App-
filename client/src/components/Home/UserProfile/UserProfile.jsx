import React, { useState, useEffect, useMemo } from 'react';
import { auth } from '../../../Firebase/firebase';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify'; // Assuming you have toast notifications configured
// import { toast } from 'react-toastify'

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loadingUserData, setLoadingUserData] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const firestore = useMemo(() => getFirestore(), []);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (currentUser) {
          setUser(currentUser);

          const userRef = doc(firestore, 'users', currentUser.uid);
          const userSnap = await getDoc(userRef);
          if (userSnap.exists()) {
            const data = userSnap.data();
            setUserData(data);
            setFormData(data); // Initialize form data with existing user data
          }
        }
      } catch (error) {
        console.error("Error fetching user data: ", error);
      } finally {
        setLoadingUserData(false);
      }
    };

    fetchUserData();
  }, [firestore]);

  // const handleShareProfile = async () => {
  //   try {
  //     const url = window.location.href;
  //     await navigator.clipboard.writeText(url); // Using native clipboard API
  //     toast.success('URL copied to clipboard!', {
  //       position: toast.POSITION.TOP_CENTER
  //     });
  //   } catch (error) {
  //     console.error("Error copying URL to clipboard: ", error);
  //     toast.error('Failed to copy URL to clipboard!', {
  //       position: toast.POSITION.TOP_CENTER
  //     });
  //   }
  // };


  const handleShareProfile = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          text: 'Check out my profile!',
          url: window.location.href
        });
        console.log('Profile shared successfully');
        toast.success('Profile shared successfully!', {
          position: toast.POSITION.TOP_CENTER
        });
      } else {
        throw new Error('Web Share API not supported');
      }
    } catch (error) {
      console.error('Error sharing profile:', error);
      toast.error('Failed to share profile!', {
        position: toast.POSITION.TOP_CENTER
      });
    }
  };






  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      const userRef = doc(firestore, 'users', user.uid);
      await setDoc(userRef, formData);
      setUserData(formData); // Update the displayed data
      setIsEditing(false); // Close the modal
    } catch (error) {
      console.error("Error saving user data: ", error);
    }
  };

  const handleCloseModal = () => {
    setIsEditing(false);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">Profile Page</h1>
        {user ? (
          <div>
            <div className="flex justify-center mb-6">
              <img src={user.photoURL} alt="Profile" className="w-32 h-32 rounded-full border-4 border-indigo-500" />
            </div>
            <div className="text-center space-y-4">
              <p className="text-xl font-medium text-gray-700">Name: {user.displayName}</p>
              <p className="text-lg text-gray-600">Email: {user.email}</p>
              <p className="text-lg text-gray-600">Email Verified: {user.emailVerified ? 'Yes' : 'No'}</p>
              <p className="text-lg text-gray-600">Account Created: {new Date(user.metadata.creationTime).toLocaleDateString()}</p>
              <p className="text-lg text-gray-600">Last Sign-In: {new Date(user.metadata.lastSignInTime).toLocaleDateString()}</p>
              {loadingUserData ? (
                <p className="text-lg text-gray-600">Loading additional user data...</p>
              ) : userData ? (
                <div className="mt-6 space-y-2">
                  <p className="text-lg text-gray-600">Age: {userData.age}</p>
                  <p className="text-lg text-gray-600">Address: {userData.address}</p>
                  <p className="text-lg text-gray-600">Occupation: {userData.occupation}</p>
                </div>
              ) : (
                <p className="text-lg text-gray-600">
                  {/* No additional user data available. */}
                </p>
              )}
              <div className="mt-8 flex justify-center space-x-4">
                <button
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out"
                  onClick={handleShareProfile}
                >
                  Share Profile
                </button>
                <ToastContainer />
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded transition duration-300 ease-in-out"
                  onClick={handleEditProfile}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-lg text-gray-600">Loading...</p>
        )}
      </div>

      {isEditing && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-md">
            <h2 className="text-2xl font-semibold mb-4">Edit Profile</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700">Age:</label>
                <input
                  type="text"
                  name="age"
                  value={formData.age || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Address:</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div>
                <label className="block text-gray-700">Occupation:</label>
                <input
                  type="text"
                  name="occupation"
                  value={formData.occupation || ''}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div className="flex justify-end space-x-4 mt-6">
                <button
                  type="button"
                  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
