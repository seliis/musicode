package main

import (
	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	app.Static("/", "./app")
	app.Static("*", "./app/index.html")

	app.Listen(":3000")
}
