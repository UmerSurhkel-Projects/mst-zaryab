export interface bookType {
    _id: string;
    name: string;
    description: string;
    number_of_pages: number;
    language: string;
    publication_date: string;
    dimensions: string;
    image: string;
    price: number;
    author: string;
    category?: { 
        id: string;
        name: string;
    };
}

export interface addBookType {
    name: string;
    description: string;
    number_of_pages: number;
    language: string;
    publication_date: string;
    dimensions: string;
    image: string;
    price: number;
    author: string;
    category: {
      id: string;
      name: string;
    };
    _id?: string;
  }
  
  export interface bookCategoriesType {
    id: string;
    name: string;
  }
  
export interface AuthType {
    access_token: string;
}
export interface DeleteResponse {
    message: string;
    success: boolean;
  }

