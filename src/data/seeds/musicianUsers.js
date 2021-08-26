const musicianUsers = [
  {
    email: "graham.mansfield@email.com",
    password: "password123",
    firstName: "graham",
    lastName: "mansfield",
    isPremium: false,
    postcode: "FK19 8PR",
    experienceLevel: "expert",
    imageUrl:
      "https://images.unsplash.com/photo-1605722243979-fe0be8158232?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
      soundCloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104172975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    openToCollaboration: true,
    openToJoiningBand: true,
    favourites: [],
    websiteUrl: "www.google.com",
  },
  {
    email: "ellie.fields@email.com",
    password: "password123",
    firstName: "ellie",
    lastName: "fields",
    isPremium: false,
    postcode: "PA45 7QT",
    experienceLevel: "amateur",
    imageUrl:
      "https://images.unsplash.com/photo-1605973012348-ed79a941a65f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    description:
      "Suspendisse potenti. Phasellus hendrerit, diam quis placerat sagittis, tellus lacus tincidunt leo, id blandit sem mauris vel justo. Sed finibus a diam a ullamcorper. Aliquam luctus a velit in blandit. Nam non nibh mattis, tempor ipsum ornare, faucibus nisl. Integer vel feugiat ipsum. Aliquam erat volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        soundCloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104172975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    openToCollaboration: true,
    openToJoiningBand: true,
    favourites: [],
    websiteUrl: "www.google.com",
  },
  {
    email: "ed.zavala@email.com",
    password: "password123",
    firstName: "ed",
    lastName: "zavala",
    isPremium: false,
    postcode: "LL72 8HR",
    experienceLevel: "expert",
    imageUrl:
      "https://images.unsplash.com/photo-1598195262096-b4f6fa993360?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    description:
      "Mauris fringilla elit eu est rutrum, eget hendrerit dolor dignissim. Suspendisse vel nibh felis. Vivamus et ornare felis. Sed ac ex sodales, luctus purus sit amet, pellentesque nibh. Vivamus pretium massa eget ante aliquet pulvinar. Aenean cursus tempus diam, a mollis felis vehicula vel. Integer bibendum gravida urna, non pellentesque massa. ",
        soundCloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104172975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    openToCollaboration: true,
    openToJoiningBand: false,
    favourites: [],
    websiteUrl: "www.google.com",
  },
  {
    email: "daniel.angele@email.com",
    password: "password123",
    firstName: "daniel",
    lastName: "angele",
    isPremium: false,
    postcode: "LS10 2QA",
    experienceLevel: "newbie",
    imageUrl:
      "https://images.unsplash.com/photo-1612120805774-0ce5e1096ddc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    description:
      "Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien. Aliquam erat volutpat. Sed malesuada, justo vel vehicula tristique, leo orci pretium purus, ac rutrum magna erat ac leo. Cras pharetra, lacus vitae congue pulvinar, ipsum nulla fermentum turpis, quis efficitur arcu turpis sed leo.",
        soundCloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104172975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    openToCollaboration: true,
    openToJoiningBand: false,
    favourites: [],
    websiteUrl: "www.google.com",
  },
  {
    email: "matthew.meadow@email.com",
    password: "password123",
    firstName: "matthew",
    lastName: "meadow",
    isPremium: false,
    postcode: "CR7 8HQ",
    experienceLevel: "amateur",
    imageUrl:
      "https://images.unsplash.com/photo-1544598256-dbf31c510ed2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    description:
      "Donec semper ex est, eu suscipit lorem vulputate quis. Nam imperdiet, tellus blandit dapibus feugiat, urna urna facilisis lectus, a feugiat velit nisi pretium quam. Nullam fermentum ultricies sollicitudin. Praesent id scelerisque risus. Cras et elit a augue cursus lacinia. Nam sed nulla sit amet dui volutpat vestibulum vel nec justo. Proin aliquet turpis quis ipsum commodo iaculis.",
      soundCloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104172975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",om",
    password: "password123",
    firstName: "eric",
    lastName: "days",
    isPremium: false,
    postcode: "RM7 0RR",
    experienceLevel: "expert",
    imageUrl:
      "https://images.unsplash.com/photo-1608650774892-e353df4c154f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=353&q=80",
    description:
      "Mauris fringilla elit eu est rutrum, eget hendrerit dolor dignissim. Suspendisse vel nibh felis. Vivamus et ornare felis. Sed ac ex sodales, luctus purus sit amet, pellentesque nibh. Vivamus pretium massa eget ante aliquet pulvinar. Aenean cursus tempus diam, a mollis felis vehicula vel. Integer bibendum gravida urna, non pellentesque massa. ",
      soundCloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104172975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",",
    password: "password123",
    firstName: "eliza",
    lastName: "garcia",
    isPremium: false,
    postcode: "AB13 0DJ",
    experienceLevel: "amateur",
    imageUrl:
      "https://images.unsplash.com/photo-1596807323443-a1528e2cd0ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80",
    description:
      "Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien. Aliquam erat volutpat. Sed malesuada, justo vel vehicula tristique, leo orci pretium purus, ac rutrum magna erat ac leo. ",
      soundCloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104172975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    password: "password123",
    firstName: "ben",
    lastName: "white",
    isPremium: false,
    postcode: "TR6 0HT",
    experienceLevel: "newbie",
    imageUrl:
      "https://images.unsplash.com/photo-1597035814924-44d6a6320549?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=358&q=80",
    description:
      "Donec congue congue venenatis. Proin dictum quam id turpis interdum, sit amet suscipit felis rutrum. Integer bibendum fringilla nunc. Ut nunc justo, rutrum sed eros posuere, feugiat efficitur orci. Vivamus justo velit, pharetra eget quam sed, pellentesque eleifend velit. Praesent lorem est, consectetur non dolor non, malesuada ornare purus. Vestibulum placerat eget magna at tincidunt.",
      soundCloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104172975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",",
    password: "password123",
    firstName: "tyler",
    lastName: "green",
    isPremium: false,
    postcode: "PR1 9QN",
    experienceLevel: "expert",
    imageUrl:
      "https://images.unsplash.com/photo-1575650272057-912a9b9f19ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    description:
      "Mauris fringilla elit eu est rutrum, eget hendrerit dolor dignissim. Suspendisse vel nibh felis. Vivamus et ornare felis. Sed ac ex sodales, luctus purus sit amet, pellentesque nibh. Vivamus pretium massa eget ante aliquet pulvinar. Aenean cursus tempus diam, a mollis felis vehicula vel. Integer bibendum gravida urna, non pellentesque massa. ",
      soundCloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104172975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",
    openToCollaboration: true,
    openToJoiningBand: false,
    favourites: [],
    websiteUrl: "www.google.com",
  },
  {
    email: "josie.peters@email.com",
    password: "password123",
    firstName: "josie",
    lastName: "peters",
    isPremium: false,
    postcode: "PA80 5XE",
    experienceLevel: "amateur",
    imageUrl:
      "https://images.unsplash.com/photo-1559519530-5fb50ef58db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    description:
      "liquam erat volutpat. Praesent rutrum suscipit orci, eget pretium dolor mattis a. Maecenas ut tincidunt mi. Integer a varius turpis, dignissim viverra purus. Aenean nisl lectus, tempor et ex vitae, lobortis mollis odio. Morbi leo arcu, condimentum non finibus eget, posuere ut ipsum.",
      soundCloudUrl:
      "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1104172975&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true",cianUsers;
