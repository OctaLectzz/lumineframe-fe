export default {
  public: {
    requiredText: '*',
    optionalText: '(optional)',
    createText: 'Create',
    cancelText: 'Cancel',
    editText: 'Edit',
    nameText: 'Name',
    descriptionText: 'Description',
    searchText: 'Search...',
    searchPhotoText: 'Search Photo...',
    collectionTitle: 'Collection',
    categoryTitle: 'Category',
    tagTitle: 'Tag',
    photoNotFound: 'Photo not available',
    collectionNotFound: 'Collection not available'
  },
  navbar: {
    homeTab: 'Home',
    exploreTab: 'Explore',
    createTab: 'Create',
    loginBtn: 'Log In',
    signupBtn: 'Sign Up',
    logoutBtn: 'Logout',
    dashboardDrpdwn: 'Dashboard',
    profileDrpdwn: 'Profile',
    collectionsDrpdwn: 'Your Collections',
    settingDrpdwn: 'Setting'
  },
  auth: {
    welcomeMsg: 'Welcome to LumineFrame',
    firstNameForm: 'First Name',
    lastNameForm: 'Last Name',
    usernameForm: 'Username',
    emailForm: 'Email',
    passwordForm: 'Password',
    passwordConfirmationForm: 'Password Confirmation',
    permissionText1: "By continuing, you agree to LumineFrame's",
    permissionText2: "and acknowledge you've read our",
    loginRedirect: 'Already a member? Log In',
    registerRedirect: 'Not on LumineFrame yet? Sign up',
    successRegisterMsg: 'Register successfully',
    failedRegisterMsg: 'The format is still wrong, please try again',
    successLoginMsg: 'Login successfully',
    failedLoginMsg: 'Incorrect email or password, please try again',
    comfirmationLogoutMsg: 'Are you sure?',
    successLogoutMsg: 'Logout successfully',
    failedLogoutMsg: 'Logout failed',
    validate: {
      firstNameRequired: 'Name must be filled in',
      firstNameMaxLength: 'Maximum Name is 50 characters',
      usernameRequired: 'Username must be filled in',
      usernameMinLength: 'Minimum Username is 3 characters',
      usernameMaxLength: 'Maximum Username is 15 characters',
      emailRequired: 'Email must be filled in',
      emailFormat: 'Invalid Email',
      passwordRequired: 'Password must be filled in',
      passwordMinLength: 'Minimum Password is 6 characters',
      passwordConfirmationRequired: 'Password Confirmation must be filled in',
      passwordConfirmationMinLength: 'Minimum Password Confirmation is 6 characters',
      passwordConfirmationSame: 'Password Confirmation do not match'
    }
  },
  photo: {
    menu1: 'Preview Image',
    menu2: 'Download Image',
    successLikeMsg: 'Photo liked successfully',
    failedLikeMsg: 'You have already liked this Photo',
    successDislikeMsg: 'Photo disliked successfully',
    failedDislikeMsg: 'Failed to dislike Photo',
    collectionTitle: 'Add to Collection',
    createCollectionTitle: 'Create Collection',
    nameMaxLength: 'Maximum Name is 20 characters',
    descriptionMaxLength: 'Maximum Description is 255 characters',
    successCreateCollectionMsg: 'Collection created successfully',
    failedCreateCollectionMsg: 'Collection failed to create',
    successSaveMsg: 'Photo saved successfully',
    failedSaveMsg: 'You have saved this Photo in this collection',
    successDownloadMsg: 'Photo downloaded successfully',
    failedDownloadMsg: 'Failed to download photo',
    commentTitle: 'Comments',
    commentNotAuth: 'You must log in first to be able to comment',
    commentForm: 'Add a comment',
    commentRules: 'Maximum 255 characters allowed',
    successCommentMsg: 'Comment added successfully',
    errorCommentMsg: 'Comment failed to add',
    editComment: 'Edit',
    deleteComment: 'Delete'
  },
  explore: {
    collectionList: 'Collection List',
    categoryList: 'Category List',
    tagList: 'Tag List',
    recomendedPhoto: 'Recommended for you',
    collectionSearch: 'Search Collection...',
    categorySearch: 'Search Category...',
    tagSearch: 'Search Tag...',
    editCollectionTitle: 'Edit Collection',
    successEditCollectionMsg: 'Collection edited successfully',
    failedEditCollectionMsg: 'Collection failed to edit'
  },
  create: {
    headerText: 'Create Lumine Photo',
    handleButton: 'Publish',
    chooseFile: 'Choose a file or drag and drop it here',
    recomendedFile: 'We recomended using high quality .jpg files less than 20mb',
    titleForm: 'Title',
    descriptionForm: 'Description',
    tagForm: 'Tag',
    categoryForm: 'Category',
    imageType: 'Please upload a valid image file (JPEG, PNG, JPG)',
    successMsg: 'Photo published successfully',
    errorMsg: 'Photo failed to publish',
    validate: {
      titleMaxLength: 'The Title may not be greater than 20 characters',
      descriptionMaxLength: 'The Description may not be greater than 255 characters',
      tagMaxLength: 'The Tag may not be greater than 20 characters'
    }
  },
  profile: {
    editProfileText: 'Edit Profile',
    completeEditProfileText: 'Complete your profile',
    changePhotoText: 'Change Photo',
    usernameForm: 'Username',
    firstNameForm: 'First Name',
    lastNameForm: 'Last Name',
    emailForm: 'Email',
    phoneForm: 'Phone Number',
    pronounsForm: 'Pronouns',
    urlForm: 'URL',
    birthdayForm: 'Date of Birth',
    genderForm: 'Gender',
    manGenderForm: 'Man',
    womanGenderForm: 'Woman',
    addressForm: 'Address',
    aboutForm: 'About',
    editProfileBtn: 'Update User Info',
    successEditAvatarMsg: 'Profile photo changed successfully',
    successEditProfileMsg: 'Collection edited successfully',
    failedEditProfileMsg: 'Invalid data. Please check the fields and try again',
    validate: {
      usernameRequired: 'Username must be filled in',
      usernameMaxLength: 'Username must be a maximum of 15 characters',
      usernameUnique: 'Username already exists',
      firstNameRequired: 'First Name must be filled in',
      firstNameMaxLength: 'First Name must be a maximum of 15 characters',
      lastNameMaxLength: 'Last Name must be a maximum of 15 characters',
      emailRequired: 'Email must be filled in',
      emailFormat: 'Invalid Email',
      phoneMaxLength: 'Phone Number must be a maximum of 15 characters',
      urlMaxLength: 'URL must be a maximum of 255 characters',
      addressMaxLength: 'Address must be a maximum of 255 characters',
      aboutMaxLength: 'About must be a maximum of 100 characters'
    }
  },
  dashboard: {
    navbar: {
      dashboardAdminText: 'Dashboard Admin',
      logoutBtn: 'Logout',
      homeDrpdwn: 'Home',
      profileDrpdwn: 'Profile',
      collectionsDrpdwn: 'Your Collections',
      settingDrpdwn: 'Setting'
    },
    sidebar: {
      homeTab: 'Home',
      userTab: 'User',
      categoryTab: 'Category',
      tagTab: 'Tag',
      photoTab: 'Photo',
      collectionTab: 'Collection',
      commentTab: 'Comment'
    },
    toggleFullScreenText: 'Toggle Fullscreen',
    exitFullScreenText: 'Exit Fullscreen',
    gridText: 'Grid',
    listText: 'List',
    deleteTitle: 'WARNING!',
    deleteMsg: 'Are you sure you want to delete this data?',
    yesDeleteText: 'Yes',
    cancelDeleteText: 'Cancel',
    home: {
      statisticsText: 'Monthly Photos Statistics',
      totalUsers: 'Number of Users',
      totalPhotos: 'Number of Photos',
      totalCategories: 'Number of Categories',
      totalTags: 'Number of Tags'
    },
    user: {
      userText: 'User',
      createText: 'Create User',
      editText: 'Edit User',
      manGenderText: 'Man',
      womanGenderText: 'Woman',
      userColumn: 'User',
      roleColumn: 'Role',
      pronounsColumn: 'Pronouns',
      birthdayColumn: 'Date of Birth',
      genderColumn: 'Gender',
      phoneColumn: 'Phone Number',
      urlColumn: 'URL',
      addressColumn: 'Address',
      aboutColumn: 'About',
      crud: {
        usernameForm: 'Username',
        firstNameForm: 'First Name',
        lastNameForm: 'Last Name',
        emailForm: 'Email',
        phoneForm: 'Phone Number',
        passwordForm: 'Password',
        passwordConfirmationForm: 'Password Confirmation',
        roleForm: 'Role',
        pronounsForm: 'Pronouns',
        urlForm: 'URL',
        birthdayForm: 'Date of Birth',
        genderForm: 'Gender',
        manGenderForm: 'Man',
        womanGenderForm: 'Woman',
        addressForm: 'Address',
        aboutForm: 'About',
        statusForm: 'Status',
        successCreateMsg: 'User created successfully',
        failedCreateMsg: 'An error occurred while creating the User',
        successEditMsg: 'User edited successfully',
        failedEditMsg: 'An error occurred while editing User',
        successDeleteMsg: 'User deleted successfully',
        failedDeleteMsg: 'An error occurred while deleting User'
      },
      validate: {
        usernameRequired: 'Username must be filled in',
        usernameMaxLength: 'Username must be a maximum of 15 characters',
        usernameUnique: 'Username already exists',
        firstNameRequired: 'First Name must be filled in',
        firstNameMaxLength: 'First Name must be a maximum of 15 characters',
        lastNameMaxLength: 'Last Name must be a maximum of 15 characters',
        emailRequired: 'Email must be filled in',
        emailFormat: 'Invalid Email',
        phoneMaxLength: 'Phone Number must be a maximum of 15 characters',
        passwordRequired: 'Password must be filled in',
        passwordMinLength: 'Password must be at least 8 characters',
        passwordConfirmationRequired: 'Password Confirmation must be filled in',
        passwordConfirmationSame: 'Password Confirmation must be the same as Password',
        urlMaxLength: 'URL must be a maximum of 255 characters',
        addressMaxLength: 'Address must be a maximum of 255 characters',
        aboutMaxLength: 'About must be a maximum of 100 characters'
      }
    },
    category: {
      categoryText: 'Category',
      createText: 'Create Category',
      editText: 'Edit Category',
      categoryCodeColumn: 'Category Code',
      imageColumn: 'Image',
      nameColumn: 'Name',
      descriptionColumn: 'Description',
      crud: {
        imageForm: 'Image',
        uploadImageText: 'Upload Image',
        changeImageText: 'Change Image',
        nameForm: 'Name',
        descriptionForm: 'Description',
        successCreateMsg: 'Category created successfully',
        failedCreateMsg: 'An error occurred while creating the Category',
        successEditMsg: 'Category edited successfully',
        failedEditMsg: 'An error occurred while editing Category',
        successDeleteMsg: 'Category deleted successfully',
        failedDeleteMsg: 'An error occurred while deleting Category'
      },
      validate: {
        imageRequired: 'Image must be filled in',
        nameRequired: 'Name must be filled in',
        nameMaxLength: 'Name must be a maximum of 50 characters',
        descriptionMaxLength: 'Description must be a maximum of 255 characters'
      }
    },
    tag: {
      tagText: 'Tag',
      createText: 'Create Tag',
      editText: 'Edit Tag',
      nameColumn: 'Name',
      descriptionColumn: 'Description',
      crud: {
        nameForm: 'Name',
        descriptionForm: 'Description',
        successCreateMsg: 'Tag created successfully',
        failedCreateMsg: 'An error occurred while creating the Tag',
        successEditMsg: 'Tag edited successfully',
        failedEditMsg: 'An error occurred while editing Tag',
        successDeleteMsg: 'Tag deleted successfully',
        failedDeleteMsg: 'An error occurred while deleting Tag'
      },
      validate: {
        nameRequired: 'Name must be filled in',
        nameMaxLength: 'Name must be a maximum of 20 characters',
        nameUnique: 'Name already exists',
        descriptionMaxLength: 'Description must be a maximum of 255 characters'
      }
    },
    photo: {
      photoText: 'Photo',
      createText: 'Create Photo',
      showText: 'Show Photo',
      editText: 'Edit Photo',
      photoNumberColumn: 'Photo Number',
      userColumn: 'User',
      imageColumn: 'Image',
      titleColumn: 'Title',
      descriptionColumn: 'Description',
      crud: {
        successCreateMsg: 'Photo created successfully',
        failedCreateMsg: 'An error occurred while creating the Photo',
        successEditMsg: 'Photo edited successfully',
        failedEditMsg: 'An error occurred while editing Photo',
        successDeleteMsg: 'Photo deleted successfully',
        failedDeleteMsg: 'An error occurred while deleting Photo'
      }
    },
    collection: {
      collectionText: 'Collection',
      showText: 'Show Collection',
      collectionCodeColumn: 'Collection Code',
      userColumn: 'User',
      photosColumn: 'Photos',
      nameColumn: 'Name',
      descriptionColumn: 'Description',
      crud: {
        successDeleteMsg: 'Collection deleted successfully',
        failedDeleteMsg: 'An error occurred while deleting Collection'
      }
    },
    comment: {
      commentText: 'Comment',
      userColumn: 'User',
      photoColumn: 'Photo',
      contentColumn: 'content',
      crud: {
        successDeleteMsg: 'Comment deleted successfully',
        failedDeleteMsg: 'An error occurred while deleting Comment'
      }
    }
  }
}
