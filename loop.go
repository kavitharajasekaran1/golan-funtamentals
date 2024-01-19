package main

import (
	"fmt"
	"strings"
)

func main() {
	const totalNumberOfTickets uint = 50
	var conferenceName string = "Go Conference"
	var remainingTickets uint = 50
	var firstName string
	var lastName string
	var email string
	var userTickets uint

	var bookings = []string{}
	for {
		fmt.Printf("Welcome to %v booking application.\nWe have total of %v tickets and %v are still available.\nGet your tickets here to attend\n", conferenceName, totalNumberOfTickets, remainingTickets)
		fmt.Println("Enter your first name:")
		fmt.Scanln(&firstName)
		fmt.Println("enter your last name:")
		fmt.Scanln(&lastName)
		fmt.Println("Enter your email:")
		fmt.Scanln(&email)
		fmt.Println("enter number of tickets:")
		fmt.Scanln(&userTickets)

		remainingTickets = totalNumberOfTickets - userTickets
		bookings = append(bookings, firstName+" "+lastName)
		firstNames := []string{}

		for _, booking := range bookings {
			var names = strings.Fields(booking) //which splits the booking [firstname lastname]
			firstNames = append(firstNames, names[0])
		}

		fmt.Printf("Remaining Tickets:%v\n", remainingTickets)
		fmt.Printf("Bookings:%v\n", bookings)
		fmt.Printf("firstnames:%v\n", firstNames)
	}
}
