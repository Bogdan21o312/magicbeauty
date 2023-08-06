# Start
start:
	nx run $(filter-out $@,$(MAKECMDGOALS)):start

# Build
build dev:
	nx run $(filter-out $@,$(MAKECMDGOALS)):build:development

build prod:
	nx run $(filter-out $@,$(MAKECMDGOALS)):build:production

# Serve
serve dev:
	nx run $(filter-out $@,$(MAKECMDGOALS)):serve:development

serve prod:
	nx run $(filter-out $@,$(MAKECMDGOALS)):serve:production

# Export
export:
	nx run $(filter-out $@,$(MAKECMDGOALS)):export

# Test
test:
	nx run $(filter-out $@,$(MAKECMDGOALS)):test --w=true

test ci:
	nx run $(filter-out $@,$(MAKECMDGOALS)):test:ci --w=true

# Lint
lint:
	nx run $(filter-out $@,$(MAKECMDGOALS)):lint

# Affected lint
aff lint:
	nx affected:lint --fix=true
