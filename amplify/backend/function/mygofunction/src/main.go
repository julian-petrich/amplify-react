package main

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type player struct {
	ID       string `json:"id"`
	Name     string `json:"name"`
	Position string `json:"position"`
	Games    int    `json:"games"`
	Goals    int    `json:"goals"`
}

var players = []player{
	{ID: "1", Name: "Superman", Position: "Midfielder", Games: 144, Goals: 2},
	{ID: "2", Name: "Batman", Position: "Goalkeeper", Games: 123, Goals: 5},
	{ID: "3", Name: "Ironman", Position: "Midfielder", Games: 3, Goals: 6},
	{ID: "4", Name: "Catwoman", Position: "Forward", Games: 1, Goals: 0},
	{ID: "5", Name: "Hulk", Position: "Defender", Games: 45, Goals: 6},
	{ID: "6", Name: "Peter Pan", Position: "Midfielder", Games: 555555, Goals: 6},
}

type response struct {
	Players []player `json:"players"`
}

func Handler(ctx context.Context, request events.APIGatewayProxyRequest) (events.APIGatewayProxyResponse, error) {
	// Replace this with your data retrieval logic, e.g., querying a database
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

func main() {
	lambda.Start(Handler)
}
