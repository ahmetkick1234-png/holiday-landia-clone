-- Insert sample tours
INSERT INTO tours (title, description, price, duration, location, image_url, highlights, included)
VALUES
(
  'Istanbul Grand Tour',
  'Explore the magical city where East meets West. Visit iconic landmarks including Hagia Sophia, Blue Mosque, Topkapi Palace, and the Grand Bazaar. Experience the rich history and vibrant culture of Istanbul.',
  899.00,
  '5 Days / 4 Nights',
  'Istanbul, Turkey',
  '/placeholder.svg?height=400&width=600',
  ARRAY['Hagia Sophia Museum', 'Blue Mosque', 'Topkapi Palace', 'Grand Bazaar', 'Bosphorus Cruise', 'Turkish Bath Experience'],
  ARRAY['4-star hotel accommodation', 'Daily breakfast', 'Airport transfers', 'Professional tour guide', 'Entrance fees', 'Bosphorus dinner cruise']
),
(
  'Cappadocia Hot Air Balloon Adventure',
  'Experience the breathtaking landscapes of Cappadocia from a hot air balloon. Explore underground cities, fairy chimneys, and ancient cave churches. A truly unforgettable adventure in one of Turkey''s most unique regions.',
  1299.00,
  '4 Days / 3 Nights',
  'Cappadocia, Turkey',
  '/placeholder.svg?height=400&width=600',
  ARRAY['Hot air balloon ride', 'Underground city tour', 'Goreme Open Air Museum', 'Fairy chimneys', 'Cave hotel stay', 'Pottery workshop'],
  ARRAY['Cave hotel accommodation', 'Daily breakfast', 'Hot air balloon flight', 'Airport transfers', 'Professional guide', 'All entrance fees']
),
(
  'Antalya Beach Paradise',
  'Relax on the stunning Turkish Riviera with crystal-clear waters and beautiful beaches. Visit ancient ruins, enjoy water sports, and experience the perfect blend of history and beach relaxation.',
  749.00,
  '7 Days / 6 Nights',
  'Antalya, Turkey',
  '/placeholder.svg?height=400&width=600',
  ARRAY['Private beach access', 'Old Town Kaleici', 'Duden Waterfalls', 'Ancient Perge ruins', 'Water sports', 'Boat tour'],
  ARRAY['5-star resort accommodation', 'All-inclusive meals', 'Airport transfers', 'Beach activities', 'Daily entertainment', 'Spa access']
),
(
  'Ephesus & Pamukkale Discovery',
  'Journey through ancient history visiting the remarkably preserved ruins of Ephesus and the stunning white travertine terraces of Pamukkale. Experience two of Turkey''s most spectacular UNESCO World Heritage Sites.',
  999.00,
  '6 Days / 5 Nights',
  'Izmir & Pamukkale, Turkey',
  '/placeholder.svg?height=400&width=600',
  ARRAY['Ephesus ancient city', 'Library of Celsus', 'Pamukkale terraces', 'Hierapolis ruins', 'Thermal pools', 'Virgin Mary''s House'],
  ARRAY['4-star hotel accommodation', 'Daily breakfast and dinner', 'Airport transfers', 'Professional archaeologist guide', 'All entrance fees', 'Thermal pool access']
),
(
  'Black Sea Highlands Trek',
  'Discover the lush green highlands of Turkey''s Black Sea region. Trek through stunning mountain landscapes, visit traditional villages, and experience authentic Turkish highland culture.',
  849.00,
  '5 Days / 4 Nights',
  'Rize & Trabzon, Turkey',
  '/placeholder.svg?height=400&width=600',
  ARRAY['Ayder Plateau', 'Sumela Monastery', 'Tea plantations', 'Mountain trekking', 'Traditional villages', 'Local cuisine experience'],
  ARRAY['Mountain lodge accommodation', 'Daily meals', 'Airport transfers', 'Trekking guide', 'All entrance fees', 'Tea factory tour']
),
(
  'Mediterranean Yacht Cruise',
  'Sail along the stunning Turquoise Coast on a luxury gulet yacht. Swim in secluded bays, explore ancient Lycian ruins, and enjoy fresh Mediterranean cuisine on board.',
  1599.00,
  '8 Days / 7 Nights',
  'Bodrum to Fethiye, Turkey',
  '/placeholder.svg?height=400&width=600',
  ARRAY['Private yacht cabin', 'Secluded bay swimming', 'Ancient Lycian ruins', 'Butterfly Valley', 'Oludeniz Blue Lagoon', 'Fresh seafood meals'],
  ARRAY['Luxury gulet yacht accommodation', 'Full board meals', 'Professional crew', 'Water sports equipment', 'Port fees', 'Guided shore excursions']
);
