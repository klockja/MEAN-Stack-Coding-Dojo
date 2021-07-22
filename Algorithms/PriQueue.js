class PriQueue{
    constructor(){
        this.head = null
    }
    
    add(val,pri = 1){
        var newNode = new PriQNode(val, pri)

        if(this.head == null)
        {
            this.head = newNode;
        }
        else
        {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.print();
    }
    remove(){
        if(this.head == null)
            return
        else
        {
            var temp = this.head;
            this.head = this.head.next;
            temp.next = null;
        }
            
    }

    push(val, pri)
    {
        const newNode = new PriQNode(val, pri);

		if (this.head == null) {
			this.head = newNode;
			this.print();
			return this;
		}
		if (pri < this.head.pri) {
			this.add(val, pri);
		} 
        else 
        {
			let runner = this.head;
			while (runner.next != null && pri > runner.next.pri) {
				runner = runner.next;
			}
			newNode.next = runner.next;
			runner.next = newNode;
			this.print();
		}
		return this;
    }

    print() {
		var output = "";
		var runner = this.head;
		while (runner != null) {
			output += runner.val + ":" + runner.pri + " -> ";
			runner = runner.next;
		}
		console.log(output);
		return output;
	}
}
class PriQNode{
    constructor(val,pri){
        this.val = val
        this.pri = pri
        this.next = null
    }
}

let q = new PriQueue();
q.push(3, 1);
q.push(2, 1);
q.remove();
q.push(4, 3);