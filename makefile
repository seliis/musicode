path = "/mnt/d/musicode"

win:
	@if [ -d $(path) ]; then \
		echo "Removing Legacies"; \
		rm -rf $(path); \
	fi

	@npm run build
	@mkdir -p $(path)/app/
	@cp -r ./build/* $(path)/app/
	@GOOS=windows GOARCH=amd64 go build -o $(path)/appStart.exe ./main.go