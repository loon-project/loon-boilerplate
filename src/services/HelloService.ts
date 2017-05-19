import {Service} from "loon";

@Service()
export class HelloService {
  
  public echo(q: string) {
    if (typeof q === 'undefined') {
      return "there";
    }
    return q;
  }
}
