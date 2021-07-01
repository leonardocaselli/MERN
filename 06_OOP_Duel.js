class Card{
    constructor(name,cost){
      this.name=name;
      this.cost=cost;
    }
  }
  
  class Unit extends Card{
    constructor(name,cost,power,res){
      super(name,cost);
      this.power=power;
      this.res=res;
  
    }
    attack(target){
      
      target.res-=this.power;
      console.log(`REDUCE ${target.name} y queda en ${target.res}`);
    }
    imprime(){
      return `name: ${this.name}, cost:${this.cost}, power: ${this.power},res: ${this.res}`
  
    }
  
  }
  class Effect extends Card{
    constructor(name,cost,text,stat,magnitude){
      super(name,cost);
      this.text=text;
      this.stat=stat;
      this.magnitude=magnitude;
    }
    play( target ) {
      if( target instanceof Unit ) {
        if(this.stat=="power"){
          target.power+=this.magnitude;
          console.log(target.power);
        }else{
          target.res+=this.magnitude;
          console.log(target.res);
        }
      } else {
        throw new Error( "Target must be a unit!" );
      }
    }
  }
  
  
  
  
  
  
  /*
  const unit1 =new Unit("rambo",5,10,4);
  console.log(unit1.imprime());
  const unit2 =new Unit("terminator",5,15,30);
  console.log(unit2.imprime());
  unit1.attack(unit2);
  console.log(unit2.imprime());
  const card1=new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",8);
  card1.play(unit2);
  console.log(unit2.imprime());
  const card2=new Effect("Pair Programming",3,"increase target's power by 2","power",2);
  card2.play(unit2);
  console.log(unit2.imprime());
  */
  const ninja1 = new Unit("Red Belt Ninja",3,3,4);
  const ninja2= new Unit("Black Belt Ninja",4,5,4);
  
  const card1=new Effect("Hard Algorithm",2,"increase target's resilience by 3","resilience",3);
  const card2=new Effect("Unhandled Promise Rejection",1,"reduce target's resilience by 2","resilience",-2);
  const card3=new Effect("Pair Programming",3,"increase target's power by 2","power",2);
  
  
  card1.play(ninja1);
  card2.play(ninja2);
  card3.play(ninja1);
  ninja1.attack(ninja2);