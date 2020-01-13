export class Quote {
    constructor(
        public quote: string, 
        public author: string, 
        public quoteposter: string,
        public upvotes: number,
        public downvotes:number,
        public posttime: Date ){}
}
