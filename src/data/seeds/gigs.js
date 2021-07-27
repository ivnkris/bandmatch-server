const gigs = [
  {
    title: "Jazz Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 250,
    genre: "jazz",
    postcode: "CH65 0EU",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 02, 21, 30),
    venueId: "60fc1266cdff430e7ad75cc4",
    userId: ["60fc1266cdff430e7ad75cc5"],
  },
  {
    title: "Rock Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 300,
    genre: "rock",
    postcode: "SY23 3UF",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 10, 21, 30),
    venueId: "60fc1266cdff430e7ad75cc6",
    userId: ["60fc1266cdff430e7ad75cc7"],
  },
  {
    title: "Country Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 400,
    genre: "country",
    postcode: "EH21 7FE",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 15, 21, 30),
    venueId: "60fc1266cdff430e7ad75cc8",
    userId: ["60fc1266cdff430e7ad75cc9"],
  },
  {
    title: "Pop Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 250,
    genre: "pop",
    postcode: "SM2 6ES",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 21, 21, 30),
    venueId: "61fc1266cdff430e7ad75cc1",
    userId: ["62fc1266cdff430e7ad75cc5"],
  },
  {
    title: "Folk Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 400,
    genre: "folk",
    postcode: "NR12 7AA",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 01, 21, 30),
    venueId: "63fc1266cdff430e7ad75cc4",
    userId: ["64fc1266cdff430e7ad75cc5"],
  },
  {
    title: "Jazz Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 250,
    genre: "jazz",
    postcode: "CH65 0EU",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 02, 21, 30),
    venueId: "65fc1266cdff430e7ad75cc4",
    userId: ["66fc1266cdff430e7ad75cc5"],
  },
  {
    title: "Rock Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 300,
    genre: "rock",
    postcode: "SY23 3UF",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 05, 21, 30),
    venueId: "67fc1266cdff430e7ad75cc4",
    userId: ["68fc1266cdff430e7ad75cc5"],
  },
  {
    title: "Country Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 400,
    genre: "country",
    postcode: "EH21 7FE",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 10, 21, 30),
    venueId: "69fc1266cdff430e7ad75cc4",
    userId: ["60fc2266cdff430e7ad75cc5"],
  },
  {
    title: "Pop Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 250,
    genre: "pop",
    postcode: "SM2 6ES",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 13, 21, 30),
    venueId: "60fc1366cdff430e7ad75cc4",
    userId: ["60fc1466cdff430e7ad75cc5"],
  },
  {
    title: "Folk Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 400,
    genre: "folk",
    postcode: "NR12 7AA",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 15, 21, 30),
    venueId: "60fc1566cdff430e7ad75cc4",
    userId: ["60fc1666cdff430e7ad75cc5"],
  },
];

module.exports = gigs;
