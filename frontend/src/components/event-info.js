const data = { 
  events: [
  {
    eventName: 'TestEvent1',
    date: '2023-02-21',
    artist: 'TestArtist1',
    tickets: '130',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
  },
  {
    eventName: 'TestEvent2',
    date: '2023-04-02',
    artist: 'TestArtist2',
    tickets: '0',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
  },
  {
    eventName: 'TestEvent3',
    date: '2023-04-11',
    artist: 'TestArtist3',
    tickets: '1000',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
  },
  {
    eventName: 'TestEvent4',
    date: '2023-04-26',
    artist: 'TestArtist4',
    tickets: '34',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
  },
  {
    eventName: 'TestEvent5',
    date: '2023-05-04',
    artist: 'TestArtist5',
    tickets: '4000',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
  },
  {
    eventName: 'TestEvent6',
    date: '2023-06-01',
    artist: 'TestArtist6',
    tickets: '130',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
  },
  {
    eventName: 'TestEvent7',
    date: '2023-06-11',
    artist: 'TestArtist7',
    tickets: '130',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
  },
  {
    eventName: 'TestEvent8',
    date: '2023-07-03',
    artist: 'TestArtist8',
    tickets: '20000',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
  },
  {
    eventName: 'TestEvent9',
    date: '2023-08-21',
    artist: 'TestArtist9',
    tickets: '0',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
  }
]

}

export default events
