class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
seats["A3"] = "Dan";
seats.A2 = "John";
