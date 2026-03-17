---
description: "Start spawning mobs in 4 simple steps."
---

# Quick Start

`stommobs` centers around `MobSpawner` and `MobProfile`.

## Steps

1. Create or obtain an `EventNode<Event>`
2. Create a spawner and bind it to your event node
3. Register profiles (vanilla or custom)
4. Spawn mobs by profile id or by profile object

## Example

::: code-group

```kotlin [Kotlin]
import net.minestom.server.coordinate.Pos
import net.minestom.server.event.Event
import net.minestom.server.event.EventNode
import net.minestom.server.instance.Instance
import codes.bed.minestom.mobs.StomMobs

fun quickStart(node: EventNode<Event>, instance: Instance) {
    // 1. Create a spawner bound to your event node
    val spawner = StomMobs.createSpawner(node, withVanillaProfiles = true)
    
    // 2. Spawn a zombie
    val zombie = spawner.spawnAt("vanilla:zombie", instance, 0.0, 42.0, 0.0, level = 5)
    
    // 3. Make it follow a player
    if (instance.players.isNotEmpty()) {
        val player = instance.players.first()
        spawner.followPlayer(zombie, player)
    }
}
```

```java [Java]
import net.minestom.server.coordinate.Pos;
import net.minestom.server.event.Event;
import net.minestom.server.event.EventNode;
import net.minestom.server.instance.Instance;
import net.minestom.server.entity.Player;
import codes.bed.minestom.mobs.StomMobs;
import codes.bed.minestom.mobs.spawn.MobSpawner;

public final class QuickStart {
    public static void run(EventNode<Event> node, Instance instance) {
        // 1. Create a spawner bound to your event node
        MobSpawner spawner = StomMobs.spawnerWithVanillaProfiles(node);

        // 2. Spawn a zombie
        var zombie = spawner.spawnAt("vanilla:zombie", instance, 0, 42, 0, 5);

        // 3. Make it follow a player
        if (!instance.getPlayers().isEmpty()) {
            Player player = instance.getPlayers().iterator().next();
            spawner.followPlayer(zombie, player);
        }
    }
}
```

:::

