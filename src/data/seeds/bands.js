const bands = [
  {
    name: "Giraffesica",
    location: "Birmingham",
    experienceLevel: "expert",
    numberOfMembers: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1504637929313-c8eebe7c27af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=748&q=80",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    soundCloudUrl: "https://soundCloud.com/oneokrock",
    openToMembers: true,
    openToCollaboration: false,
    websiteUrl: "",
    gigs: [],
  },
  {
    location: "Manchester",
    experienceLevel: "amateur",
    numberOfMembers: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1598517834829-5980d842fbcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    name: "Miami Panic",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    soundCloudUrl: "https://soundCloud.com/oneokrock",
    openToMembers: false,
    openToCollaboration: true,
    websiteUrl: "",
    gigs: [],
  },
  {
    location: "Liverpool",
    experienceLevel: "newbie",
    numberOfMembers: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1565103420311-8cbbc3cd87b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80",
    name: "FiveDust",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    soundCloudUrl: "https://soundCloud.com/bombs-away",
    openToMembers: true,
    openToCollaboration: true,
    websiteUrl: "",
    gigs: [],
  },
  {
    location: "London",
    experienceLevel: "amateur",
    numberOfMembers: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1549834125-80f9dda633c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "Daring Dolls",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    soundCloudUrl: "https://soundCloud.com/bombs-away",
    openToMembers: true,
    openToCollaboration: true,
    websiteUrl: "",
    gigs: [],
  },
  {
    location: "Leeds",
    experienceLevel: "expert",
    numberOfMembers: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1616994503361-04ac7f5f6aac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1564&q=80",
    name: "Wild Wild",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    soundCloudUrl: "https://soundCloud.com/dc-jazz-jam",
    openToMembers: true,
    openToCollaboration: false,
    websiteUrl: "",
    gigs: [],
  },
  {
    location: "Nottingham",
    experienceLevel: "newbie",
    numberOfMembers: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1619283062612-57973e110812?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    name: "Taking Back Autumn",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    soundCloudUrl: "https://soundCloud.com/dc-jazz-jam",
    openToMembers: false,
    openToCollaboration: true,
    websiteUrl: "",
    gigs: [],
  },
  {
    location: "Cardiff",
    experienceLevel: "amateur",
    numberOfMembers: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1483393458019-411bc6bd104e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80",
    name: "Keyback",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    soundCloudUrl: "https://soundCloud.com/grownfolk",
    openToMembers: true,
    openToCollaboration: false,
    websiteUrl: "",
    gigs: [],
  },
  {
    location: "Newcastle",
    experienceLevel: "expert",
    numberOfMembers: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1591538595352-a6f793b4dda5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80",
    name: "Pineapple Fighters",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    soundCloudUrl: "https://soundCloud.com/grownfolk",
    openToMembers: false,
    openToCollaboration: true,
    websiteUrl: "",
    gigs: [],
  },
  {
    location: "London",
    experienceLevel: "newbie",
    numberOfMembers: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1559694097-9481924b2905?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    name: "Chris and Sons",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    soundCloudUrl: "https://soundCloud.com/thats-not-an-edit",
    openToMembers: true,
    openToCollaboration: false,
    websiteUrl: "",
    gigs: [],
  },
  {
    location: "Birmingham",
    experienceLevel: "amateur",
    numberOfMembers: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1598387846419-a2c870ad3ecd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=755&q=80",
    name: "Blue Bottlesica",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    soundCloudUrl: "https://soundCloud.com/thats-not-an-edit",
    openToMembers: false,
    openToCollaboration: true,
    websiteUrl: "",
    gigs: [],
  },
];

module.exports = bands;
