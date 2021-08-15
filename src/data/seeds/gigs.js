const gigs = [
  {
    title: "Jazz Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1510682657356-6ee07db8204b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    postcode: "CH65+0EU",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 02, 21, 30),
    accepting: true,
  },
  {
    title: "Rock Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 300,
    imageUrl:
      "https://images.unsplash.com/photo-1556340346-5e30da977c4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    postcode: "SY23+3UF",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 10, 21, 30),
    accepting: true,
  },
  {
    title: "Country Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 400,
    imageUrl:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=700&q=60",
    postcode: "EH21+7FE",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 15, 21, 30),
    accepting: false,
  },
  {
    title: "Pop Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1486556396467-d83d2b23514b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    postcode: "SM2+6ES",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 21, 21, 30),
    accepting: true,
  },
  {
    title: "Folk Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 400,
    imageUrl:
      "https://images.unsplash.com/photo-1533137098665-47ca60257cec?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEyfHxjb25jZXJ0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    postcode: "NR12+7AA",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 01, 21, 30),
    accepting: false,
  },
  {
    title: "Jazz Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1504704911898-68304a7d2807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    postcode: "CH65+0EU",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 02, 21, 30),
    accepting: false,
  },
  {
    title: "Rock Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 300,
    imageUrl:
      "https://images.unsplash.com/photo-1569315618680-3d673b5e1514?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    postcode: "SY23+3UF",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 05, 21, 30),
    accepting: true,
  },
  {
    title: "Country Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 400,
    imageUrl:
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGNvbmNlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    postcode: "EH21+7FE",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 10, 21, 30),
    accepting: true,
  },
  {
    title: "Pop Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 250,
    imageUrl:
      "https://images.unsplash.com/uploads/1411160110892ab555b6f/80b0d25e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGNvbmNlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    postcode: "SM2+6ES",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 13, 21, 30),
    accepting: false,
  },
  {
    title: "Folk Night",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 400,
    imageUrl:
      "https://images.unsplash.com/photo-1544427920-c49ccfb85579?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODR8fGNvbmNlcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    postcode: "NR12+7AA",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 07, 15, 21, 30),
    accepting: true,
  },
];

module.exports = gigs;
