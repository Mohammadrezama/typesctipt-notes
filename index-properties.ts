// it is usefull when we want to add props types which is we are not sure about the name and existance

interface ErrorContainer {
  //{email:not a valid email,password:incorrect password ,username:'Most start with a capital'}
  // predefined props should be the same type
  email: string;
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "not a valid email",
  username: "duplicate userName ",
};
