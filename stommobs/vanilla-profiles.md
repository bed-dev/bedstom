---
description: "Ready-to-use mob profiles included with the library."
---

# Vanilla Profiles

`stommobs` ships with ready-to-use profiles that cover common hostile, passive, and utility mob behaviors:

- `vanilla:zombie` - hostile melee profile with player targeting
- `vanilla:villager` - passive wandering profile
- `vanilla:sheep` - passive wandering profile tuned for low combat stats
- `vanilla:wolf` - hunter-style profile
- `vanilla:iron_golem` - defensive tank profile
- `vanilla:enderman` - ambusher-style profile

## Register and Spawn

::: code-group

```kotlin [Kotlin]
import net.minestom.server.coordinate.Pos
import net.minestom.server.event.Event
import net.minestom.server.event.EventNode
import net.minestom.server.instance.Instance
import codes.bed.minestom.mobs.StomMobs

fun spawnVanilla(node: EventNode<Event>, instance: Instance) {
    val spawner = StomMobs.spawnerWithVanillaProfiles(node)

    // Using convenience spawnAt for cleaner syntax
    spawner.spawnAt("vanilla:zombie", instance, 0.0, 42.0, 0.0, level = 10)
    spawner.spawnAt("vanilla:villager", instance, 4.0, 42.0, 4.0, level = 2)
    spawner.spawnAt("vanilla:sheep", instance, 8.0, 42.0, 8.0, level = 2)

    // You can mix in additional bundled profiles as needed
    spawner.spawnAt("vanilla:wolf", instance, 12.0, 42.0, 12.0, level = 4)
}
```

```java [Java]
import net.minestom.server.coordinate.Pos;
import net.minestom.server.event.Event;
import net.minestom.server.event.EventNode;
import net.minestom.server.instance.Instance;
import codes.bed.minestom.mobs.StomMobs;
import codes.bed.minestom.mobs.spawn.MobSpawner;

public final class VanillaExample {
    public static void run(EventNode<Event> node, Instance instance) {
        MobSpawner spawner = StomMobs.spawnerWithVanillaProfiles(node);

        // Using spawnAt helper for integers
        spawner.spawnAt("vanilla:zombie", instance, 0, 42, 0, 10);
        spawner.spawnAt("vanilla:villager", instance, 4, 42, 4, 2);
        spawner.spawnAt("vanilla:sheep", instance, 8, 42, 8, 2);
        spawner.spawnAt("vanilla:wolf", instance, 12, 42, 12, 4);
    }
}
```

:::

## Extending Bundled Profiles

Bundled profiles are a starting point. You can still register your own custom profiles and spawn both side-by-side through the same `MobSpawner` instance.
