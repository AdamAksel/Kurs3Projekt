const data = { 
  events: [
  {
    eventName: 'TestEvent1',
    date: '2023-04-01',
    artist: 'TestArtist1',
    tickets: '130',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
    image: 'https://picsum.photos/200/300',
    location: 'TestLocation1',
    place: 'TestPlace1',
    time: '12:00'

  },
  {
    eventName: 'TestEvent2',
    date: '2023-04-02',
    artist: 'TestArtist2',
    tickets: '0',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
    image: 'https://picsum.photos/200/300',
    location: 'TestLocation2',
    place: 'TestPlace2',
    time: '12:00'
  },
  {
    eventName: 'TestEvent3',
    date: '2023-04-11',
    artist: 'TestArtist3',
    tickets: '1000',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
    image: 'https://picsum.photos/200/300',
    location: 'TestLocation3',
    place: 'TestPlace3',
    time: '12:00'
  },
  {
    eventName: 'TestEvent4',
    date: '2023-04-26',
    artist: 'TestArtist4',
    tickets: '34',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
    image: 'https://picsum.photos/200/300',
    location: 'TestLocation4',
    place: 'TestPlace4',
    time: '12:00'
  },
  {
    eventName: 'TestEvent5',
    date: '2023-05-04',
    artist: 'TestArtist5',
    tickets: '4000',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
    image: 'https://picsum.photos/200/300',
    location: 'TestLocation5',
    place: 'TestPlace5',
    time: '12:00'
  },
  {
    eventName: 'TestEvent6',
    date: '2023-06-01',
    artist: 'TestArtist6',
    tickets: '130',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
    image: 'https://picsum.photos/200/300',
    location: 'TestLocation6',
    place: 'TestPlace6',
    time: '12:00'
  },
  {
    eventName: 'TestEvent7',
    date: '2023-06-11',
    artist: 'TestArtist7',
    tickets: '130',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
    image: 'https://picsum.photos/200/300',
    location: 'TestLocation7',
    place: 'TestPlace7',
    time: '12:00'
  },
  {
    eventName: 'TestEvent8',
    date: '2023-07-03',
    artist: 'TestArtist8',
    tickets: '20000',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
    image: 'https://picsum.photos/200/300',
    location: 'TestLocation8',
    place: 'TestPlace8',
    time: '12:00'
  },
  {
    eventName: 'TestEvent9',
    date: '2023-08-21',
    artist: 'TestArtist9',
    tickets: '0',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel risus aliquet orci interdum sollicitudin. In nisl justo, ullamcorper id consectetur ut, convallis nec lorem. Pellentesque feugiat a justo ac scelerisque. Donec porta odio eu mi dignissim vulputate sed egestas nunc. Donec ac erat tincidunt, pellentesque mauris in, blandit ex. Vivamus dignissim, diam non convallis lobortis, enim justo tincidunt enim, vitae ultrices felis turpis a nisl. Aliquam dignissim diam et quam tristique vehicula. Donec laoreet, dui quis volutpat aliquet, dolor purus dictum metus, et faucibus odio dolor eget libero. Integer condimentum, felis ac auctor ullamcorper, nunc ex porttitor massa, vitae maximus magna tortor id dui. Curabitur faucibus nisl sed arcu ornare commodo. Fusce fringilla accumsan lectus id dictum. Quisque tincidunt lobortis fermentum.',
    image: 'https://picsum.photos/200/300',
    location: 'TestLocation9',
    place: 'TestPlace9',
    time: '12:00'
  }
]

}

export default data;
