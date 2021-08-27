const gigs = [
  {
    title: "Rancidplay",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 400,
    imageUrl:
      "https://images.unsplash.com/photo-1613093335399-829e30811789?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bXVzaWMlMjBzaG93fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "PL12+PKK",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 08, 02, 22, 30),
    accepting: true,
  },
  {
    title: "Brain Power",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 302,
    imageUrl:
      "https://images.unsplash.com/photo-1518887674551-653367e3bcc0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bXVzaWMlMjBzaG93fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "GH10+TRB",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 08, 05, 18, 30),
    accepting: true,
  },
  {
    title: "Big Kings Align",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 112,
    imageUrl:
      "https://images.unsplash.com/photo-1502158817207-08ef5c149b03?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "CH65+0EU",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 08, 22, 20, 30),
    accepting: true,
  },
  {
    title: "Random Screamers: The Ultimate Show",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 865,
    imageUrl:
      "https://images.unsplash.com/photo-1483577910943-59decea62c35?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "T90+4PP",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 08, 26, 21, 15),
    accepting: true,
  },
  {
    title: "Soul Nights",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 398,
    imageUrl:
      "https://images.unsplash.com/photo-1574282775995-e87dc2a0c4fd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "B45+8EU",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 09, 02, 19, 45),
    accepting: true,
  },
  {
    title: "Greens Open Air",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 500,
    imageUrl:
      "https://images.unsplash.com/photo-1485120750507-a3bf477acd63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60",
    postcode: "BP2+9PL",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 09, 07, 21, 00),
    accepting: true,
  },
  {
    title: "Random Wonders Fest",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 123,
    imageUrl:
      "https://images.unsplash.com/46/unsplash_52c319226cefb_1.JPG?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTZ8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "ST2+8EU",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 09, 11, 20, 45),
    accepting: true,
  },
  {
    title: "Rock City",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 284,
    imageUrl:
      "https://images.unsplash.com/photo-1541107105007-78dc46003215?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "B64+6BP",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 09, 17, 20, 30),
    accepting: true,
  },
  {
    title: "Minders",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 685,
    imageUrl:
      "https://images.unsplash.com/photo-1598518141787-5be70e839626?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "R45+7BP",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 09, 17, 21, 30),
    accepting: true,
  },
  {
    title: "Night Owl Party",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 910,
    imageUrl:
      "https://images.unsplash.com/photo-1468231300737-ecd13d75ce6f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "YK6+6MM",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 09, 19, 20, 15),
    accepting: true,
  },
  {
    title: "Funk Fest",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 310,
    imageUrl:
      "https://images.unsplash.com/photo-1506091403742-e3aa39518db5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "MV9+9EY",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 09, 21, 19, 30),
    accepting: true,
  },

  {
    title: "Elephanised",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1440660405495-b26acc5309a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "CH10+0EK",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 09, 22, 20, 00),
    accepting: true,
  },
  {
    title: "Magiczniej",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 105,
    imageUrl:
      "https://images.unsplash.com/photo-1490854474151-a980c80583b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "LL11+9BU",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 09, 28, 20, 45),
    accepting: true,
  },
  {
    title: "Mesmerised Gala",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 300,
    imageUrl:
      "https://images.unsplash.com/photo-1512426955159-31e05f99702c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2FsYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "C65+0KU",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 09, 29, 21, 15),
    accepting: true,
  },
  {
    title: "Hello World Fiesta",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 400,
    imageUrl:
      "https://images.unsplash.com/photo-1521472709501-280327085513?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fG11c2ljJTIwc2hvd3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "BR65+0EU",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 10, 02, 20, 45),
    accepting: true,
  },
  {
    title: "Grace's Grace Ball",
    description:
      "Nullam a dolor vitae ipsum pulvinar placerat. Cras malesuada, lectus et pharetra pharetra, nisl ante fermentum dui, vitae hendrerit odio mi ut neque. Aliquam vel justo accumsan, ultrices dolor non, lacinia velit. Mauris quis viverra ipsum, in mattis nunc. Nam et turpis lorem. Suspendisse elit mauris, suscipit id nisl id, vehicula congue ante. Pellentesque interdum ipsum eu aliquam cursus. Aliquam erat volutpat. Duis vitae ante vitae eros egestas iaculis id at ipsum. Vivamus at lorem viverra, elementum velit at, accumsan sapien.",
    fee: 295,
    imageUrl:
      "https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FsYXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=60",
    postcode: "CH65+5PL",
    websiteUrl: "www.google.com",
    dateTime: new Date(2021, 10, 03, 21, 30),
    accepting: true,
  },
  {
    title: "Disco Diva's Dance Night",
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
    title: "Hell's Fire",
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
    title: "Monday Mayhem",
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
    title: "Rave Riot",
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
    title: "Moonlight Jazz",
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
    title: "Smooth Jazz",
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
    title: "Hustle Live",
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
    title: "Barn Showdown",
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
    title: "Dance with the Stars",
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
    title: "Goldie's Ball",
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
