package main

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type player struct {
	ID          string `json:"id"`
	Name        string `json:"name"`
	Position    string `json:"position"`
	Games       int    `json:"games"`
	Goals       int    `json:"goals"`
	CleanSheets int    `json:"cleansheets"`
}

var players = []player{
	{ID: "1", Name: "Superman", Position: "Midfielder", Games: 144, Goals: 2, CleanSheets: 1},
	{ID: "2", Name: "Batman", Position: "Goalkeeper", Games: 123, Goals: 5, CleanSheets: 3},
	{ID: "3", Name: "Ironman", Position: "Midfielder", Games: 3, Goals: 6, CleanSheets: 123},
	{ID: "4", Name: "Catwoman", Position: "Forward", Games: 1, Goals: 0, CleanSheets: 444},
	{ID: "5", Name: "Hulk", Position: "Defender", Games: 45, Goals: 6, CleanSheets: 0},
	{ID: "6", Name: "Peter Pan", Position: "Midfielder", Games: 555555, Goals: 6, CleanSheets: 567899},
}

type response struct {
	Players []player `json:"players"`
}

func findPlayerByID(id string) (player, error) {
	for _, p := range players {
		if p.ID == id {
			return p, nil
		}
	}
	return player{}, fmt.Errorf("player not found")
}

func Handler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	switch request.HTTPMethod {
	case "GET":
		// Check if the 'id' parameter is present in the request
		id, found := request.PathParameters["id"]
		if found {
			// If 'id' is present, retrieve the player by ID
			p, err := findPlayerByID(id)
			if err != nil {
				return events.APIGatewayProxyResponse{
					StatusCode: 404,
					Headers:    map[string]string{"Content-Type": "application/json"},
					Body:       `{"message": "Player not found"}`,
				}, nil
			}
			resp := response{Player: p}
			body, err := json.Marshal(resp)
			if err != nil {
				return events.APIGatewayProxyResponse{}, fmt.Errorf("failed to marshal response: %v", err)
			}
			return events.APIGatewayProxyResponse{
				StatusCode: 200,
				Body:       string(body),
				Headers: map[string]string{
					"Content-Type":                 "application/json",
					"X-MyCompany-Func-Reply":       "hello-handler",
					"Access-Control-Allow-Origin":  "*",
					"Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
					"Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",
				},
			}, nil
		} else {
			// If 'id' is not present, return all players
			resp := response{Players: players}
			body, err := json.Marshal(resp)
			if err != nil {
				return events.APIGatewayProxyResponse{}, fmt.Errorf("failed to marshal response: %v", err)
			}
			return events.APIGatewayProxyResponse{
				StatusCode: 200,
				Body:       string(body),
				Headers: map[string]string{
					"Content-Type":                 "application/json",
					"X-MyCompany-Func-Reply":       "hello-handler",
					"Access-Control-Allow-Origin":  "*",
					"Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT, DELETE",
					"Access-Control-Allow-Headers": "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization",
				},
			}, nil
		}
	default:
		return events.APIGatewayProxyResponse{
			StatusCode: 400,
			Headers:    map[string]string{"Content-Type": "application/json"},
			Body:       `{"message": "Unsupported HTTP method"}`,
		}, nil
	}
}

func main() {
	lambda.Start(Handler)
}
