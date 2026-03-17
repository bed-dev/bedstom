# StomUI

A lightweight, declarative menu library for Minestom servers with automatic Bedrock (Floodgate) support.

## Why use StomUI?

- **Unified API**: Write one menu, support both Java (Inventory) and Bedrock (Forms).
- **Kotlin DSL**: Build menus with concise, readable syntax.
- **Bedrock-aware by default**: Java inventories can be represented as forms for Floodgate players.
- **High Performance**: Designed for low overhead in busy servers.
- **No Heavy Dependencies**: Minimal footprint and simple setup.

## Typical Flow

1. Add the dependency from JitPack.
2. Initialize `StomUI` once during server startup.
3. Define reusable menus with the DSL.
4. Open menus for players; StomUI handles Java vs Bedrock routing.

## Documentation Map

- [Getting Started](getting-started.md) - installation, setup, and first menu.
- [Menu DSL](concepts/menu-dsl.md) - declarative menu structure and button actions.
- [Architecture](concepts/architecture.md) - internal components and optimization guidance.
- [Inventory GUI](guis/gui.md) - inventory-centric usage and animation hooks.
- [Bedrock Forms](bedrock-forms/forms.md) - direct form APIs and form-specific behavior.
- [Forms Concepts](concepts/forms.md) - conversion rules and Bedrock-focused options.
