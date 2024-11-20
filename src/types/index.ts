export type Language = 'EN' | 'FR';

export type Service = {
  id: string;
  title: {
    EN: string;
    FR: string;
  };
  description: {
    EN: string;
    FR: string;
  };
  price: string;
  image: string;
};

export type Portfolio = {
  id: string;
  category: 'photo' | 'video' | 'collab';
  title: string;
  image: string;
  description: {
    EN: string;
    FR: string;
  };
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: {
    EN: string;
    FR: string;
  };
  image: string;
};